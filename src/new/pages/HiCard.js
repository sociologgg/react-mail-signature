import React from "react";
import januslogo from '../../images/logojanussign.png'
import maillogo from '../../images/signmail.png'
import globeLogo from '../../images/signglobe.png'
import linkedinLogo from '../../images/signlinkedin.png'
import facebookLogo from '../../images/signfacebook.png'
import youtubeLogo from '../../images/signyoutube.png'
import instagramLogo from '../../images/signinstagram.png'
import twitterLogo from '../../images/signtwitter.png'
import fi_phone from '../../images/fi_phone2.png'
function HiCard({ fname,logo,lname,title, mail,linklist,phone}) {

function socialmediamanager()
{
  
  let isinstaFirst  = (linklist.linkedin ==""); 
  let isyoutubeFirst = isinstaFirst && linklist.instagram == "";
  let istwitterFirst = isyoutubeFirst && linklist.youtube == "";
  let isfacebookfirst = istwitterFirst && linklist.twitter=="";


return( <div className="flex items-center mt-20px">
  
 { linklist.linkedin    !=""? <div> <a href={linklist.linkedin.includes("https://") ? linklist.linkedin :`https://`+linklist.linkedin}><img className="w-24px h-auto" src={linkedinLogo}/> </a> </div>:<></> }
 { linklist.instagram  !=""? <div>  <a href={linklist.instagram}><img className={`w-24px h-auto ${isinstaFirst ? '': `ml-10px`}`} src={instagramLogo}/> </a> </div>:<></> }

 { linklist.youtube   !=""? <div> <a href={  linklist.youtube}><img className={`w-24px h-auto ${isyoutubeFirst ? '': `ml-10px`}`} src={youtubeLogo}/>  </a></div>:<></> }
 { linklist.twitter   !=""? <div> <a href={linklist.twitter}><img className={`w-24px h-auto ${istwitterFirst ? '': `ml-10px`}`} src={twitterLogo}/>  </a></div>:<></> }
 { linklist.facebook   !=""? <div><a href={linklist.facebook}><img className={`w-24px h-auto ${isfacebookfirst ? '': `ml-10px`}`} src={facebookLogo}/> </a> </div>:<></> }
</div> )
}

  return (
    <div className="w-screen h-screen bg-janus-site-blue flex justify-center items-center">
      <div>
      <img className="w-620px h-114px" src={januslogo}/>
      
      <div className="min-h-176px mt-36px   flex">
      <div className="flex-1 flex"/>

      <div className="bg-white  flex min-w-374px rounded-lg px-30px py-26px">
      <div className="flex flex-col justify-center  h-100%">
        <img src={logo} className="w-72px h-auto" />
      </div>
        <div className="pl-30px  flex-1">
           <div className="font-roboto  whitespace-nowrap  text-left font-bold text-mail-gray text-20px">
            {fname + ' ' + lname}
          </div> 

          <div className="font-roboto font-light text-14px text-left  text-mail-gray">
          {title}
          </div>
          <div className="mt-28px">
              
             {/*phone*/}{phone !=""? <div className="flex items-center "> <img className="w-20px h-auto" src={fi_phone}/> <p className="ml-12px font-roboto text-10px text-left  text-mail-gray"> {phone} </p>  </div>: <div/>}
            
            {/*mail*/} {mail != "" ? <div className="flex items-center mt-10px "> <a href={`mailto:`+mail}><img className="w-20px h-auto" src={maillogo}/></a> <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">{mail}</p>  </div> : <div/>}
            {/*websitesi*/} {linklist.web != "" ? <div className="flex items-center mt-10px">  <a href={linklist.web.includes("https://") ? linklist.web:`https://`+linklist.web }><img className="w-20px h-auto" src={globeLogo}/> </a> <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">{linklist.web}</p>  </div> : <div/>}
            {/*Sosyal medya*/}{socialmediamanager()}
          </div>
          <div className="mt-24px flex justify-end">
        <p className="text-janus-dark-blue font-roboto text-12px">Created by JANUS</p>
          </div>
      </div>
    </div>
      <div className="flex-1 flex"/>

      </div>
    </div>
   
    </div>
  );
}

export default HiCard;
