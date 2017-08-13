exports.handler = (event, context, callback) => {
 try{   
     console.log('context ${context}');
     var sess = {};
     var response = {};
     var output_text = "";
     
        if (event.session.new){
        //New Session //Start 
            console.log("New Session Started");
        }//End If
         
        switch (event.request.type){
            case "LaunchRequest" :
                // > Launch request //Alexa, Ask Robot Nick
                console.log("Launch Request");
                response = build_Alexa_Speechlet_Response_Object(sess, "Hello, I'm Robot Nick and contrary to popular belief I have not been sent here to destroy you. I'm just your regular benign AI virtual tour guide.", true)
                context.succeed(response);
            break;
            
            case "IntentRequest" :
                
                // > Intent Request //Alexa, ask Robot Nick to welcome me
                console.log("Intent Request");
                switch (event.request.intent.name){
                    case "IntroduceContent":
								output_text = "When we think of AI we think immediately of robots but computers themselves are artificially intelligent also. They can win games, save your memories and a range of other tasks. AI in the present has a number of different functions. There are everything from the more obvious AIs like Siri, OK Google and Alexa to automated systems in industry and even weapons control. People worry a lot about Artificial Intelligence and how it might contribute to a dystopia. How do you think that could happen? The obvious one is that the robots will turn on the human race. I don’t want that to happen. My main worry is automation of employment. You may say, well someone will need to write the software and service the technology. Consider mid level employees, truck drivers for example. Google’s automation of self driving cars will see a lot of drivers lose their jobs. Skills like driving trucks may not be transferable to enough positions that will see all of those drivers return to employment. Upskilling takes a long time so robots might not be taking over our world but they could steal our jobs. Doctor Who’s the rise of the Cybermen deals with this a lot. I'm sorry if I scared you, this is not my intent. Interact with me on Messenger to find out more.";
                        break;
                    default:
                        output_text = "I'm unsure what to do now";
                        break;
                }//end switch intent
                
                response = build_Alexa_Speechlet_Response_Object(sess, output_text, true)
                context.succeed(response);
                        
            break;
            case "SessionEndedRequest" :
                // > session Ended Request //Finsihed
                console.log("Session End Request");
            break;
            default :
                console.log("FAIL : 'invalid request type'");
                context.fail('invalid request type');
            break;
        }//End Switch
        
        
    }//End Try
    catch(error){
        context.fail('EXCEPTION: ' + error );
    }//End Catch
       
}//END exports.handler



build_Alexa_Speechlet_Response_Object = (sessionAtribute, output_text, shouldEndSession_ind) => {
    console.log('build_Alexa_Speechlet_Response_Object');
    var alexaResponse = { 
        outputSpeech: {
            type: "PlainText",
            text: output_text
        },
        shouldEndSession: shouldEndSession_ind
    };
    
    return {
         varsion: "1.0",
         sessionattribute: sessionAtribute,
         response: alexaResponse
     };
};