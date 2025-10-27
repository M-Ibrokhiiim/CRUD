// Controllers
import fs from 'fs/promises';
import path from 'path'
import url from 'url'


const _fileName = url.fileURLToPath(import.meta.url)
const _dirName = path.dirname(_fileName)


// GET 
export const allTasks = async(req,res)=>{
 const tasksPATH = JSON.parse( await fs.readFile(path.join(_dirName,'..','DATA','tasks.json'),'utf8'));
 res.status(201).send(tasksPATH)
}

// POST
export const addTASK = async(req,res,next)=>{
    const incomingData = req.body.task

    try{

        if(incomingData.trim().length <2){
            const error = new Error('Sorry,task length must be bigger than 3 letters!');
            throw new Error(error)
        }

        const tasksPATH = JSON.parse( await fs.readFile(path.join(_dirName,'..','DATA','tasks.json'),'utf8'));
        const newTask = {id:tasksPATH.length+1,task:incomingData}

        tasksPATH.push(newTask)
        await fs.writeFile(path.join(_dirName,'..','DATA','tasks.json'),JSON.stringify(tasksPATH))

        res.json({msg:'Task successfully added!'})

    }catch(err){
       next(err)
    }
}

// DELETE
export const taskRemover =async(req,res,next)=>{
    const id = parseInt(req.params.id)

    try{
        const tasksPATH = JSON.parse( await fs.readFile(path.join(_dirName,'..','DATA','tasks.json'),'utf8'));

        const isExist =tasksPATH.some(task=>task.id === id)
        
          
        if(isExist===false){
        res.status(404)
        throw new Error('Sorry, task is not exist in lists')
        }
        
        const changedTasks = tasksPATH.filter((task)=>{
            return task.id !== id})

        await fs.writeFile(path.join(_dirName,'..','DATA','tasks.json'),JSON.stringify(changedTasks))
        
        res.json({msg:'Task successfully deleted!'})
    }catch(err){
      next(err)
    }
}