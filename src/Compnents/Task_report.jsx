import React from "react";
import "./Task_report.css";
import data from './data.json';


const Task_report=()=>
{

    return(
        <div className="back">
        {
        data.map((task,i)=>(<div>
        <div className="boxassign">
        
            <div className="texts">
                <p>Assingnedby  :   {task.Assingnedby}</p>
                </div>
        
        </div>
        
        <div className="boxtask">
        <div className="texts">
                <p>Task Name:  {task.Task}</p>
                </div>
        </div>
        <div className="boxdesc">
        <div className="texts">
                <p>Description  :  {task.Desc}</p>
                </div>
        </div>
        <div className="boxdate">
        <div className="texts">
                <p>Due date :  {task.Due}</p>
                </div>
        </div>
        <div className="boxstatus">
        <div className="texts">
                <p>Task Stat:  {task.Task_s}</p>
                </div>
        </div>
        </div>))}
        <div className="btk">{
            <button className="button">OK</button>
        }
        </div>
        </div>
    );

}
export default Task_report;