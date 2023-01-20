import React from 'react';
import classes from './question.module.css'

const Question = ({question,answer}) => {
    return (
        <div className={classes.questions}>
                    <div className={classes.you}>
                        <div className={classes.you_text}>
                            Вы:
                        </div>
                        <div className={classes.question}>
                            {question}
                        </div>
                    </div>
                    <div className={classes.we}>
                        <div className={classes.we_text}>
                            Поддержка:
                        </div>
                        <div className={classes.answer}>
                            {answer}
                        </div>
                    </div>
                </div>
    );
};

export default Question;