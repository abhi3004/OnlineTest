angular.module("app",[])
.controller("testCtrl",testCtrl)
function testCtrl($interval){
    var test=this;
    test.q_no=1;
    test.question=['To perform which among the following functions, Rajukas were appointed by Asoka?',
    'Which among the following scripts of modern India have descended from the Sarda Script?',
    'The “Siddhimatrika” script was one of the forms of writing Sanskrit in ancient India. This script, which made Sanskrit works known in China and Japan was developed during the times of ___:',
    'The ‘Saptanga Theory of State’ (Theory of Seven Limbs of the State) was propounded by ',
    'The doctrine of ‘Vyuhavada’ is associated with which among the following Sects (or) cults of India?    ',
    'Which among the following Vedic Texts gives a systematic exposition of the ‘theory of rebirth’ for the first time?    ',
    'The evidences of ‘pit-dwelling’ have been discovered from which of the following ancient Indian sites?',
    'The first astronomical observatory of Harappan Civilization has been found at which among the following ancient Indian sites?',
    'Who were Manu, Yajnavalkya , Narada and Brihaspati ?',
    'Select the statement which is NOT correct regarding Kalidasa:',
    'In 1837, James Princep deciphered an Inscription in Brahmi script referring to a king called ‘Devanamapiya Piyadassi’. The celebrated monarch known by this epithet was :',
    'Which of the following statements about the Gupta Empire under Samudragupta is NOT correct?',
    'Which of the following deities were associated with the ‘Rig Vedic Period’ ? 1)Purandara 2)Varuna 3)Savitri 4)Usha    ',
    'The harappans used intaglio seals, made mostly of carved and fired steatite :',
    'Establishment of Svetambara as a separate sect within Jainism was resulted at ____?',
    'Which among the following sites of Indus Valley Civilization is located on the banks of River Indus in Larkana District of Pakistan?',
    'The sulbasutras of ancient Indian Scholar “Baudhayan” have reached to a most correct value of which among the following?',
    'As per the ancient Indian Texts, the land between which among the following two rivers has been called “Brahamavarta”?',
    'The Indus Valley Civilization has not been deciphered yet. Consider the following reasons:1) No knowledge about their language 2)Small length of inscriptions 3)Absence of bilingual texts',
    'Consider the following matches: 1)Kena Upanishad : Sam Veda 2)Katha Upanishad: Krishna yajurveda 3)Prasna Upanishad : Samveda 4)Mandukya Upanishad: atharvaveda Which among the above is / are correct?',
    'Aihole Inscription is ascribed to which of the following rulers ?',
    '“Tamso Ma Jyotirgamaya” ” Lead us from Darkness to Light” , this comes from which among the following Upanishadas?',
    'There is only one Rock Edict in which Asoka talks about taxation. Which among the following is that edict?',
    'Which among the following is NOT a correct statement in context with the Gupta Era?',
    ' Dhravya guna shastra, which deals with several species of medicinal plants is a part of which among the following ?'
                    ];
    test.questions=[1,2,3,4,5];
    test.q_select=function(x){
        test.q_no=x;
    };
    test.nexty=function(a){
        test.q_no=a+1;
       
    };
    test.prev=function(b){
        test.q_no=b-1;
    }
    
}