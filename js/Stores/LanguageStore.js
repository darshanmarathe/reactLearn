import {
    EventEmitter
} from 'events';
import _ from 'lodash'



//import { dispatcher } from '../dispatcher.js'
class LanguageStore extends EventEmitter {
    constructor() {
        super();
        this.Languages = [{
                id: 1,
                name: "C#",
                features : [
                    {
                        name : "partials"
                    },
                    {
                        name : "lambda"
                    },
                    {
                        name: "linq"
                    }
                ]
            },
            {
                id: 2,
                name: "Javascript",
                features : [
                    {
                        name : "dynamic"
                    },
                    {
                        name : "arrow"
                    },
                    {
                        name: "scripting"
                    }
                ]
           
            },
            {
                id: 3,
                name: "Java"
            },
            {
                id: 4,
                name: "Android",
                features : [
                    {
                        name : "cross platform"
                    },
                    {
                        name : "OOP"
                    },
                    {
                        name: "sucks as hell"
                    }
                ]
           
            },
            {
                id: 5,
                name: "Golang",
                features : [
                    {
                        name : "No Nonsence"
                    },
                    {
                        name : "pure functional"
                    },
                    {
                        name: "fast"
                    }
                ]
           
            }


        ]
    }



    AddLang = (name) => {
        this.Languages.push({
            id: this.Languages.length + 1,
            name
        })
        this.emit("change")
    }

    GetAll() {
        return this.Languages;
    }

    Get(_id){
        return _.find(this.Languages, {id : parseInt(_id)});
    }

   HandleAction = (action) => {
       console.log("Language store received an action" , action)
   }

}


const languageStore = new LanguageStore;
//dispatcher.register(languageStore.HandleAction.bind(languageStore))
//TODO : To Remove this line 
window.store = languageStore;
//window.dispatcher = dispatcher;
export default languageStore