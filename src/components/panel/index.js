import React from "react";
import Logo from '../../image/logo.svg'
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Panel = props => {
    const for800Width = useMediaQuery({query: '(max-width: 800px)'})
    const for590Width = useMediaQuery({query: '(max-width: 590px)'})

    return(
        <>
        {(for800Width && !for590Width) &&
            <Div800Width>
                <img src={Logo}></img>

                <DivScore800Width>
                    <PScore>S{'\u00A0'}C{'\u00A0'}O{'\u00A0'}R{'\u00A0'}E</PScore>
                    <H2Score>{props.score}</H2Score>
                </DivScore800Width>
            </Div800Width>
        }

        {for590Width &&
            <Div590Width>
                <Img590Width src={Logo}></Img590Width>

                <DivScore590Width>
                    <PScore590Width>S{'\u00A0'}C{'\u00A0'}O{'\u00A0'}R{'\u00A0'}E</PScore590Width>
                    <H2590width>{props.score}</H2590width>
                </DivScore590Width>
            </Div590Width>
        }

        {(!for800Width && !for590Width) &&
            <Div>
                <img src={Logo}></img>

                <DivScore>
                    <PScore>S{'\u00A0'}C{'\u00A0'}O{'\u00A0'}R{'\u00A0'}E</PScore>
                    <H2Score>{props.score}</H2Score>
                </DivScore>
            </Div>
        }
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    border: solid 2px #ccc;
    border-radius: 8px;
    padding: 15px 20px;
    width: 600px;
    margin-top: 80px;
`

const DivScore = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    padding: 0px 50px;
    border-radius: 8px;
`

const PScore = styled.p`
    color: #0047AB;
    font-weight: bold;
    margin-top: 8px;
`

const H2Score = styled.h2`
    color: #808080;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 6px;
`

const Div800Width = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 2px #ccc;
    border-radius: 8px;
    padding: 15px 20px;
    width: 450px;
    margin-top: 80px;
`

const DivScore800Width = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    padding: 0px 30px;
    border-radius: 8px;
`

const Img590Width = styled.img`
    height: 80px;
    width: 110px;
`

const PScore590Width = styled.p`
    color: #0047AB;
    font-weight: bold;
    margin-top: 8px;
    font-size: 13px;
`

const H2590width = styled.h2`
    color: #808080;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 6px;
`

const Div590Width = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 2px #ccc;
    border-radius: 8px;
    padding: 15px 20px;
    width: 250px;
    margin-top: 80px;
`

const DivScore590Width = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    padding: 7px 20px;
    border-radius: 8px;
`

export default Panel