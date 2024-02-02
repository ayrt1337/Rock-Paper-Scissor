import React from "react";
import Triangule from '../../images/bg-triangle.svg'
import styled from "styled-components";
import Paper from '../../images/icon-paper.svg'
import Scissor from '../../images/icon-scissors.svg'
import Rock from '../../images/icon-rock.svg'
import { useMediaQuery } from "react-responsive";

const ChoicePanel = (props) => {
    const for820Width = useMediaQuery({query: '(max-width: 820px)'})
    const for620Width = useMediaQuery({query: '(max-width: 620px)'})

    function handleClick(event){
        props.setChoice(event.target.id)
        props.setShowChoice(true)
    }

    return(
        <>
            {!props.showChoice &&
                <>
                    {!for820Width &&
                        <Div>
                            <img src={Triangule} alt=''></img>
                
                            <ChoiceImg style={{
                                border: 'solid 23px #5470f5',
                                left: '-35%',
                                top: '-28%'
                            }} id='paper' src={Paper} alt='' onClick={handleClick}></ChoiceImg>
                
                            <ChoiceImg style={{
                                border: 'solid 23px #eca41c',
                                right: '-35%',
                                top: '-28%'
                            }} id='scissor' src={Scissor} alt='' onClick={handleClick}></ChoiceImg>
                
                            <ChoiceImg style={{
                                border: 'solid 23px #dd3a56',
                                right: '15%',
                                top: '55%'
                            }} id='rock' src={Rock} alt='' onClick={handleClick}></ChoiceImg>   
                        </Div>
                    }

                    {(for820Width && !for620Width) &&
                        <Div style={{marginTop: '200px'}}>
                            <img src={Triangule} alt=''></img>
                
                            <ChoiceImg style={{
                                border: 'solid 20px #5470f5',
                                left: '-25%',
                                top: '-28%',
                                padding: '40px',
                                height: '180px',
                                width: '180px'
                            }} id='paper' src={Paper} alt='' onClick={handleClick}></ChoiceImg>
                
                            <ChoiceImg style={{
                                border: 'solid 20px #eca41c',
                                right: '-25%',
                                top: '-28%',
                                padding: '40px',
                                height: '180px',
                                width: '180px'
                            }} id='scissor' src={Scissor} alt='' onClick={handleClick}></ChoiceImg>
                
                            <ChoiceImg style={{
                                border: 'solid 20px #dd3a56',
                                right: '18%',
                                top: '45%',
                                padding: '40px',
                                height: '180px',
                                width: '180px'
                            }} id='rock' src={Rock} alt='' onClick={handleClick}></ChoiceImg>   
                        </Div>
                    }

                    {(for820Width && for620Width) &&
                        <Div>
                            <img style={{height: '200px'}} src={Triangule} alt=''></img>
                
                            <ChoiceImg style={{
                                border: 'solid 17px #5470f5',
                                left: '0%',
                                top: '-28%',
                                padding: '22px',
                                height: '120px',
                                width: '120px'
                            }} id='paper' src={Paper} alt='' onClick={handleClick}></ChoiceImg>
                
                            <ChoiceImg style={{
                                border: 'solid 17px #eca41c',
                                right: '0%',
                                top: '-28%',
                                padding: '22px',
                                height: '120px',
                                width: '120px'
                            }} id='scissor' src={Scissor} alt='' onClick={handleClick}></ChoiceImg>
                
                            <ChoiceImg style={{
                                border: 'solid 17px #dd3a56',
                                right: '28%',
                                top: '40%',
                                padding: '22px',
                                height: '120px',
                                width: '120px'
                            }} id='rock' src={Rock} alt='' onClick={handleClick}></ChoiceImg>   
                        </Div>
                    }
                </>
            }
        </>
    )
}

const Div = styled.div`
    margin: 0px auto 0px auto;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 180px;
    width: 278px;
`

const ChoiceImg = styled.img`
    cursor: pointer;
    height: 200px;
    width: 200px;
    background-color: white;
    border-radius: 50%;
    padding: 45px;
    position: absolute;
`

export default ChoicePanel