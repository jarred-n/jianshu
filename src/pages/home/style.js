import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflot: hidden
    width: 960px;
    margin: 0 auto;
    height: 300px;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px; 
`

export const TopicItem = styled.div`
    height: 32px;
    line-height: 32px;
    float: left;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`