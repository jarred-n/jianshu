import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { HeaderWrapper,
    SearchWrap,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style';
import { CSSTransition } from 'react-transition-group';


class Header extends Component {

      
   getListArea() {
        const { focused, list, page,  totalPage, mouseIn, handelMouseEnter, handelMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length) {
            for(let i = ((page-1) * 10); i < page * 10; i++) {
                if(newList[i]) {
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }

        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>{handleChangePage(page, totalPage, this.spinIcon)}}>
                            <i ref={(icon)=> {this.spinIcon=icon}} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    } 

    render() {
        const { focused, handleInputFocus, handleInputBlur, list} = this.props; 
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <SearchWrap>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused? 'focused': ''} 
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused? 'focused iconfont zoom': 'iconfont zoom'}>&#xe62d;</i> 
                        {this.getListArea()}
                    </SearchWrap>
                </Nav>
                <Addition>
                    <Button className='writing'> <i className='iconfont'>&#xe678;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
            )
    }
}

//store中的数据映射到组件中的 Props
const mapStateToProps = (state) => {
    return {
       focused: state.getIn(['header', 'focused']),
       list: state.getIn(['header', 'list']),
       page: state.getIn(['header', 'page']),
       totalPage: state.getIn(['header', 'totalPage']),
       mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
//组件改变store中的数据
const mapDispathTotProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handelMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handelMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1)); 
            }  
        }
    }
}

export default connect(mapStateToProps, mapDispathTotProps)(Header);