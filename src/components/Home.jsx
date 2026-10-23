import {  useState } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    const [tia,setTia]=useState(0);
    const [smv,setSmv]=useState(0);
    const [er,setEr]=useState(0);

    const [month,setMonth]=useState(0);
    const [time,setTime]=useState(0);
    const [rate,setRate]=useState(0);
    const [card,setCard]=useState(false);

    const totalResult=(e)=>{
        e.preventDefault();
        const i=rate/12/100;
        const n=time*12;
        const TotalInvestedAmount=month*12*time;
        const maturityValue=month*((Math.pow(1+i,n)-1)/i)*(1+i);
        const esReturn=maturityValue-TotalInvestedAmount;

        setTia(TotalInvestedAmount);
        setSmv(maturityValue);
        setEr(esReturn);
    }

    const setShow=(e)=>{
        e.preventDefault();
        totalResult(e);
        setCard(true);

    }
    return(
        <>
        <div className="flex gap-6">
        <div className="w-[450px] h-[400px] bg-green-100 p-4 mt-10 ml-10 font-Arial rounded shadow-2xl">
            <h1 className="text-cyan-950 text-4xl text-center font-bold">SIP Investment Planner </h1>
            <br></br>
            <h1 className="text-left text-2xl font-bold ">Plan Your Future With SIP</h1> <br></br>

            <p className="text-black-900 text-left  ">
                A Systematic Investment Plan (SIP) is a smart, 
                hassle-free way to build wealth. Instead of waiting to save a massive lump sum, 
                you invest a fixed amount of money regularly (weekly or monthly) 
                into your chosen mutual funds. It makes investing as effortless as paying your monthly 
                subscription bills.

            </p>
            <button className="w-30 h-10 bg-cyan-600 mt-10"
            onClick={()=>navigate('/guide')}>Learn More</button>
        </div>

        <div className="w-[450px] h-[500px] bg-green-200 mt-10 ml-50 rounded shadow-2xl">

            <h1 className="text-cyan-950 text-4xl font-serif text-center">SIP Calculator</h1>
            <p className="text-cyan-950 font-serif text-xl text-center">Calculate Your Monthly SPI</p>
            <br></br>

            <form>
                <label>Monthly Investment</label><br></br>
                <input className="w-[450px] h-10 bg-white rounded " type="number" 
                onChange={(e)=>setMonth(Number(e.target.value))}/><br></br><br></br>

                <label>Expected Return Rate (%)</label><br></br>
                <input className="w-[450px] h-10 bg-white rounded" type="number" 
                onChange={(e)=>setRate(Number(e.target.value))}/><br></br><br></br>

                <label>Time Period (Years)</label><br></br>
                <input className="w-[450px] h-10 bg-white rounded" type="number" 
                onChange={(e)=>setTime(Number(e.target.value))}/><br></br><br></br>

                <button className="w-[450px] h-10 bg-green-400 rounded cursor-pointer" 
                onClick={setShow}>Calculate</button>
   
            </form>

            <div className="bg-green-100 p-4 mt-10 text-serif  border rounded">
            {
                    card &&(
                        <div >
                            <h1 className="text-center text-3xl text-cyan-950">Investment Summary</h1>
                            <br></br>
                            <div className="grid grid-cols-2 gap-y-2">
                            <b>Invested Amount:</b>   <p>{tia}</p>
                            <b>Estimated Return:</b>    <p>{er}</p>
                            <b>Total Value:</b> <p>{smv}</p>
                            </div>
                        </div>
                    )
                }
                </div>
        </div>
        </div>
        </>
    );
}
export default Home;