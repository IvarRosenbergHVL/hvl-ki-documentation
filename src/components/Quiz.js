import React, {useId,useState} from 'react';
export default function Quiz({question,options,correct,explanation}) {
  const name=useId();
  const [answer,setAnswer]=useState(null);
  return <section className="course-quiz"><fieldset>
    <legend><strong>{question}</strong></legend>
    {options.map((option,i)=><label key={i}><input type="radio" name={name} checked={answer===i} onChange={()=>setAnswer(i)}/>{option}</label>)}
    </fieldset>
    <p aria-live="polite">{answer===null?'Velg et svar.':(answer===correct?'Riktig. ':'Ikke helt. ')+explanation}</p>
    {answer!==null&&<button className="button button--secondary button--sm" onClick={()=>setAnswer(null)}>Prøv igjen</button>}
  </section>;
}
