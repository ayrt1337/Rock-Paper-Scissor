import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const RulesButton = props => {
    const for1400Width = useMediaQuery({query: '(max-width: 1400px)'})

    return (
        <>
        {for1400Width &&
            <Div1400Width>
                <Button1400Width onClick={() => props.setShowRules(true)}>RULES</Button1400Width>
            </Div1400Width>
        }

        {!for1400Width &&
            <Div>
                <Button onClick={() => props.setShowRules(true)}>RULES</Button>
            </Div>
        }
        </>
    )
}

const Div = styled.div`
    margin-top: 130px;
    width: 100%;
`

const Button = styled.a`
    float: right;
    margin-right: 120px;
    margin-bottom: 30px;
    cursor: pointer;
    color: white;
    border: solid 1px white;
    padding: 10px 40px;
    border-radius: 10px;
    font-size: 20px;
`

const Div1400Width = styled.div`
    margin-top: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Button1400Width = styled.button`
    margin-bottom: 40px;
    cursor: pointer;
    color: white;
    border: solid 1px white;
    padding: 10px 40px;
    border-radius: 10px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0)
`

export default RulesButton