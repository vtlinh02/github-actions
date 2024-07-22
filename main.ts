import {exec} from "child_process"

exec("bash run.sh", (error,stdout,stderr) => {
    console.log(stdout)
    for (let i = 0;i <10;i++){
        console.log("Hello, now limit")
    }
})