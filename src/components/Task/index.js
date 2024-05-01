
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import { Legend, ResponsiveContainer, PieChart, Pie, Cell, } from 'recharts';
import './index.css'

const pieChartData = [
        {
          count: 20,
          department: "Engineering and Development",
        },
        {
          count: 34,
          department: "Product Management",
        },
        {
          count: 2,
          department: "Quality Assurance",
        },
        {
          count: 16,
          department: "Sales and Marketing",
        },
        {
          count: 19,
          department: "Customer Support",
        },
        {
          count: 43,
          department: "Human Resources",
        },
        {
          count: 39,
          department: "Finance and Administration",
        },
         {
          count: 55,
          department: "Research and Development",
        },
      ]
const initialTaskList=[{
            title: "Password Problems",
            department: "Engineering and Development",
            status:"Started",
            summary:"Password reset questions are the most common issue that help desk team members deal with IT help desks, especially in workplaces, are contacted by users when automatic password resets don't work, either for their computer, email, or specific software they're using."
}]
class Task extends Component{
    state={title:'',department:'',status:'',summary:'',TaskList:initialTaskList}

    onTitle=(event)=>{
      this.setState({title:event.target.value})
    }

    onDepartment=(event)=>{
        this.setState({department:event.target.value})
    }

    onStatus=(event)=>{
        this.setState({status:event.target.value})
    }

    onSummary=(event)=>{
        this.setState({summary:event.target.value})
    }

    submitForm=(event)=>{
    event.preventDefault()
    const {title,department,status,summary}=this.state
    const newTask={
        id: uuidv4(),
        title,department,status,summary}

        this.setState(prevState => ({
            TaskList: [...prevState.TaskList, newTask],
            title: '',
            department: '',
            status:'',
            summary:'',
    }))
  }

    

    render(){
    const {title,department,status,summary,TaskList}=this.state
    return(
        < div className="MainContainer">
            <div className="InputContainer">
                <form className="formContainer" onSubmit={this.submitForm}>
                    <div className="input">
                        <label htmlFor="title" className="label">Task Title</label>
                        <input id="title" className="InputTitle" type="text" value={title} onChange={this.onTitle}/>

                    </div>
                    <div className="input">
                        <label htmlFor="department" className="label">Department</label>
                        <select id="department" className="dropDownList" onChange={this.onDepartment} value={department}>
                            <option value="Engineering and Development">Engineering and Development</option>
                            <option value="Product Management">Product Management</option>
                            <option value="Quality Assurance">Quality Assurance</option>
                            <option value="Sales and Marketing">Sales and Marketing</option>
                            <option value="Customer Support">Customer Support</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Finance and Administration">Finance and Administration</option>
                            <option value="Research and Development">Research and Development</option>
                        </select>
                    </div>
                    <div className="input">
                        <label htmlFor="taskStatus" className="label">Task Status</label>
                        <select id="taskStatus" className="dropDownList" value={status} onChange={this.onStatus}>
                            <option value="Started">Started</option>
                            <option value="InProgress">InProgress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="input">
                        <label htmlFor="taskSummary" className="label">TaskSummary</label>
                        <textarea id="taskSummary" rows="10" columns="10" value={summary} onChange={this.onSummary}></textarea>
                    </div>
                    <button type="submit" className="Button">Submit</button>
                </form>
                <div className="pieChartContainer">
                        <h4 className="rechartHeading">Pie chart</h4>
                        
                        <ResponsiveContainer width={600} height={300}>
                            <PieChart>
                                <Pie
                                cx="70%"
                                cy="40%"
                                data={pieChartData}
                                startAngle={0}
                                endAngle={360}
                                innerRadius="0%"
                                outerRadius="70%"
                                dataKey="count"
                            >
                                    <Cell name="Engineering and Development" fill="#fecba6" />
                                    <Cell name="Product Management" fill="#b3d23f" />
                                    <Cell name="Quality Assurance" fill="#fcba03" />
                                     <Cell name="Sales and Marketing" fill="#fc1703" />
                                      <Cell name="Customer Support" fill="#66fc03" />
                                       <Cell name="Finance and Administration" fill="#0390fc" />
                                        <Cell name="Human Resources" fill="#7303fc" />
                                        <Cell name="Research and Development" fill="#fc03a5" />
                                </Pie>
                                    <Legend
                                    iconType="circle"
                                    layout="vertical"
                                    verticalAlign="middle"
                                    align="right"
                                />

                            </PieChart>
                        </ResponsiveContainer>

                    </div>

            </div>
            <div className="listContainer">
                <ul className="unorderedList">
                    {TaskList.map(eachTask=>(<li className="taskList">
                        <h3>Title: {eachTask.title}</h3>
                        <h3>Department: {eachTask.department}</h3>
                        <h3>Status: {eachTask.status}</h3>
                        <p>Summary: {eachTask.summary}</p>
                    </li>))}
                </ul>

            </div>
            
        </div>
    )

}
}

export default Task