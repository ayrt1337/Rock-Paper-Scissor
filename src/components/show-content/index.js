import React, { useState } from "react";
import ScorePanel from "../score-panel";
import ChoicePanel from "../choice-panel";
import RulesBtn from "../rules-button";
import RulesPanel from "../rules-panel";
import ShowChoice from "../show-choice";
import { useMediaQuery } from "react-responsive";

const Content = () =>{
    const [showRules, setShowRules] = useState(false)
    const [showChoice, setShowChoice] = useState(false)
    const [choice, setChoice] = useState('')
    const [score, setScore] = useState(0)

    const for820Width = useMediaQuery({query: '(max-width: 820px)'})
    const for1020Height = useMediaQuery({query: '(min-height: 1020px)'})

    return(
        <>
            {(!for820Width && !for1020Height) &&
                <>
                    <RulesPanel 
                        showRules={showRules} 
                        setShowRules={setShowRules}
                    />

                    <ScorePanel score={score}/>

                    <ChoicePanel 
                        showChoice={showChoice} 
                        setShowChoice={setShowChoice}
                        setChoice={setChoice}
                    />

                    <ShowChoice 
                        showChoice={showChoice} 
                        setShowChoice={setShowChoice}
                        choice={choice}
                        setScore={setScore}
                        score={score}
                    />

                    <RulesBtn setShowRules={setShowRules}/>
                </>
            }

            {(for820Width || for1020Height) &&
                <>
                    <RulesPanel 
                        showRules={showRules} 
                        setShowRules={setShowRules}
                    />

                    <div>
                        <ScorePanel score={score}/>

                        <ChoicePanel 
                            showChoice={showChoice} 
                            setShowChoice={setShowChoice}
                            setChoice={setChoice}
                        />

                        <ShowChoice 
                            showChoice={showChoice} 
                            setShowChoice={setShowChoice}
                            choice={choice}
                            setScore={setScore}
                            score={score}
                        />

                        <RulesBtn setShowRules={setShowRules}/>
                    </div>
                </>
            }
        </>
    )
}

export default Content