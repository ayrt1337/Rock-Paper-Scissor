import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const RulesBtn = props => {
    const for820Width = useMediaQuery({query: '(max-width: 820px)'})
    const for620Width = useMediaQuery({query: '(max-width: 620px)'})

    const handleClick = () => {
        props.setShowRules(true)

        if(for620Width){
            document.getElementById('root').style.borderColor = 'white'
            document.getElementById('root').style.height = '100vh'
            document.getElementById('root').style.overflow = 'hidden'
        }
        else{
            document.getElementById('root').style.borderColor = 'rgba(0, 0, 0, 0.7)'
        }
    }

    return(
        <>
            {!for820Width &&
                <div style={{
                    padding: '170px 100px 0px 0px',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Button onClick={() => handleClick()}>RULES</Button>
                </div>
            }

            {for820Width &&
                <div style={{
                    padding: '170px 0px 0px 0px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button style={{marginBottom: '60px'}} onClick={() => handleClick()}>RULES</Button>
                </div>
            }
        </>
    )
}

const Button = styled.span`
    color: white;
    font-size: 20px;
    border: 1px solid white;
    padding: 8px 35px 8px 35px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 40px;
`

export default RulesBtn