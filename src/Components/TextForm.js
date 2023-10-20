import React,{useState} from 'react'

export default function TextForm(probes) {
  const [text,funcstate] = useState("This is ritesh");
  // funcState("This is a drill")
  const handleUp = ()=>{
    console.log("This is button click")
    funcstate(text.toUpperCase())
    probes.alertFunc('Converted to upper case','success')
  }
  const handleChange = (element)=>{
    funcstate(element.target.value)
    console.log("Change Occured")
  }
  const flip = ()=>{
    let a = text.split(" ")
    let b = ""
    Array.from(a).forEach((element,index)=>{
      if(index!==0)
      b = element+" "+b;
      else b = element
    })
    funcstate(b)
    probes.alertFunc('Sentence flipped','success')
  }

  const find=(text)=>{
    let a = 0;
    Array.from(text.split(' ')).forEach((element)=>{
      if(element !== '')a++
    })
    return a
  }

  return (
    <div style={{color:probes.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h1>{probes.heading}</h1>
            <textarea className="form-control" style={{backgroundColor:probes.mode === 'dark'?probes.col:'white',color:probes.mode === 'dark'?'white':'black'}} onChange={handleChange} id="input2" value={text} rows="15"></textarea>
            <button onClick={handleUp} className="btn btn-primary my-3" >Upper Case Convert</button>
            <button onClick={flip} className="btn btn-primary my-3 mx-3" >Flip Sentence</button>
        </div>
        <div className="container my-3">
          <h1>You Text Summary</h1>
          <p>Total words are {find(text)} and total Alphabets are {text.length}</p>
        </div>
    </div>
  )
}
