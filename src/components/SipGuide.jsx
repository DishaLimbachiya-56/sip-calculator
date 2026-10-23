import { useNavigate } from "react-router-dom";
function SipGuide(){
    const navigate=useNavigate();
    const nav=()=>{
        navigate('/benefit');
    }
    return(
        <>
        <div className="w-[100%] h-200 bg-green-200 mt-2 border p-4 " >
        <h1 className="text-center text-cyan-950 text-2xl">💡 What is an SIP?</h1><br></br>

        <div className=" w-[100%] h-22 rounded shadow border border-cyan-500">
        <p className="text-left p-4 text-green-950">
            <b>A Systematic Investment Plan (SIP) </b> is a structured investment methodology offered by mutual funds. 
            Instead of waiting to save a large lump sum of money, an SIP allows you to invest a fixed amount 
            regularly (e.g., monthly, weekly, or quarterly) into your chosen fund scheme. 
            It transforms wealth accumulation from an occasional event into a disciplined monthly habit.
        </p><br></br>
        </div>
        
        <h1 className="text-center text-cyan-950 text-2xl mt-10">🔎 How Does an SIP Work?</h1><br></br>
        <div className=" w-[100%] h-40 rounded shadow border border-cyan-500">
        <p className="text-left p-4 text-green-950">
            When you activate a monthly SIP, two financial engines work together automatically to 
            maximize 
            You do not need to timing the stock market ups and downs. 
            When the market falls, your fixed monthly allocation automatically buys more units of the 
            fund because prices are cheaper. 
            When the market rises, your allocation buys fewer units. Over time, 
            this lowers your average cost per unit significantly.
            The Power of Compounding  <br></br>
            <b>(Snowball Effect):</b> <br></br>
            The returns earned by your initial investments are automatically reinvested 
            back into the fund. This means you earn returns on your returns. Over a long horizon, 
            this creates a massive compounding snowball where your accumulated gains eventually 
            outgrow your total out-of-pocket investment capital.
        </p><br></br>
        </div>

         <h1 className="text-center text-cyan-950 text-2xl mt-10">Example</h1><br></br>
        <div className=" w-[100%] h-40 rounded shadow border border-cyan-500">
         <p className="text-left p-4 text-green-950">
            📝 The ScenarioMonthly <br></br> 
            <b>Contribution:</b> ₹5,000 every monthInvestment <br></br>
            <b>Duration:</b> 15 Years <br></br>
            <b>Annual Return Rate:</b> 12% per year <br></br>
            <b>The Final Portfolio Value:</b> <br></br>
            When your total invested capital is added to your 
            compounded earnings, 
            your final accumulated wealth grows to a staggering <b>₹25,22,880.</b>

         </p>
         </div>
        <button className="w-40 h-10 bg-cyan-600 mt-10" onClick={nav}>View SIP Benefits</button>
        </div>
        </>
    );
}
export default SipGuide;