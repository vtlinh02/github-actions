import {exec} from "child_process"

exec("bash run.sh", (error,stdout,stderr) => {
    console.log(stdout)
})