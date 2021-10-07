import React from "react";
import girlontable from "../../images/girlontable.png";
import janus from "../../images/janus.png";
import januslogo from "../../images/logojanussign.png";
import maillogo from "../../images/signmail.png";
import globeLogo from "../../images/signglobe.png";
import linkedinLogo from "../../images/signlinkedin.png";
import facebookLogo from "../../images/signfacebook.png";
import youtubeLogo from "../../images/signyoutube.png";
import instagramLogo from "../../images/signinstagram.png";
import twitterLogo from "../../images/signtwitter.png";
import questionLogo from "../../images/question.png";
import phonelogo from "../../images/fi_phone.png";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import { doc, getDoc, collection,getDocs,getFirestore} from "firebase/firestore"; 
import { useEffect } from "react";

function NewHiCard() {
const  [fname, setFname] = useState('');
const  [logo, setLogo ] = useState('');
const  [lname, setlname]  =  useState('');
const  [title , setTitle] = useState(''); 
const  [mail , setMail]   = useState('');
const  [linklist, setLinkList] =useState({});
const [phone, setPhone] = useState('');
const [isLoading,setLoading] = useState(true);
const [signatureExist, setSignatureExist] = useState(false);
   let location = useLocation();
  console.log(location);
  const db = getFirestore();
useEffect(async() => {
  const ref = doc(db,"cards", location.pathname.replace('/signatures/',''));
const docSnap = await getDoc(ref);
if (docSnap.exists()) {
    let data = docSnap.data();
   console.log(data);
    setFname(data.fname);
    setLogo(data.logo);
    setlname(data.lname);
    setTitle(data.title);
    setPhone(data.phone);
    setMail(data.mail);
    setLinkList(
    data.linkList
    );
   setSignatureExist(true);
}
 else {
  console.log("No such document!");
  setSignatureExist(false);
}
setLoading(false)

  return () => {
   
  }
}, [])

  function socialmediamanager() {
    return (
      <div className="flex items-center  mt-20px">
        {linklist.linkedin != "" ? (
          <div>
            {" "}
            <a
              href={
                linklist?.linkedin.includes("https://")
                  ? linklist.linkedin
                  : `https://` + linklist.linkedin
              }
            >
              <img className="w-24px h-auto" src={linkedinLogo} />{" "}
            </a>{" "}
          </div>
        ) : (
          <></>
        )}
        {linklist.instagram != "" ? (
          <div>
            {" "}
            <a href={linklist.instagram}>
              <img className="w-24px h-auto ml-10px" src={instagramLogo} />{" "}
            </a>{" "}
          </div>
        ) : (
          <></>
        )}

        {linklist.youtube != "" ? (
          <div>
            {" "}
            <a href={linklist.youtube}>
              <img className="w-24px h-auto ml-10px" src={youtubeLogo} />{" "}
            </a>
          </div>
        ) : (
          <></>
        )}
        {linklist.twitter != "" ? (
          <div>
            {" "}
            <a href={linklist.twitter}>
              <img className="w-24px h-auto ml-10px" src={twitterLogo} />{" "}
            </a>
          </div>
        ) : (
          <></>
        )}
        {linklist.facebook != "" ? (
          <div>
            <a href={linklist.facebook}>
              <img className="w-24px h-auto ml-10px" src={facebookLogo} />{" "}
            </a>{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }

  function showCard() {
    return (
      <div className=" shadow-hicard flex min-w-374px py-20 px-10 rounded-lg">
        <div className="flex flex-col justify-center h-100%">
          <img 
          src={  logo}
             className="w-100px h-100px" />
        </div>
        <div className="pl-30px flex-1">
          <div className="font-roboto  whitespace-nowrap  text-left font-bold text-mail-gray text-20px">
            {fname + " " + lname
            }
          </div>
          <div className="font-roboto font-light text-14px text-left  text-mail-gray">
            {
           title
            }
          </div>
          <div className="mt-20px">
            {/*phone*/}{" "}
            {phone != "" ? (
              <div className="  flex items-center ">
                {" "}
                <a>
                  <img className="w-20px h-auto" src={phonelogo} />
                </a>{" "}
                <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                  {phone}
                </p>{" "}
              </div>
            ) : (
              <div />
            )}
            {/*mail*/}{" "}
            {mail != "" ? (
              <div className="flex items-center  mt-3">
                {" "}
                <a href={`mailto:` + mail}>
                  <img className="w-20px h-auto" src={maillogo} />
                </a>{" "}
                <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                  {mail}
                </p>{" "}
              </div>
            ) : (
              <div />
            )}
            {/*websitesi*/}{" "}
        {     linklist.web != "" ? (
              <div className="flex items-center mt-10px">
                {" "}
                <a
                  href={
                    linklist.web.includes("https://")
                      ? linklist.web
                      : `https://` + linklist.web
                  }
                >
                  <img className="w-20px h-auto" src={globeLogo} />{" "}
                </a>{" "}
                <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                  {linklist.web}
                </p>{" "}
              </div>
            ) : (
              <div />
            )}
            {/*Sosyal medya*/}
            {socialmediamanager()
            }
          </div>
        </div>
      </div>
    );
  }

  function showCardTrial() {
    <div className="bg-white shadow-hicard  flex min-w-374px rounded-lg p-32">
      <div className="flex flex-col justify-center  h-100%">
        <img src={logo} className="w-72px h-72px" />
      </div>
      <div className="pl-30px  flex-1">
        <div className="font-roboto  whitespace-nowrap  text-left font-bold text-mail-gray text-20px">
          {fname + " " + lname}
        </div>

        <div className="font-roboto font-light text-14px text-left  text-mail-gray">
          {title}
        </div>
        <div className="mt-28px">
          {/*phone*/} <div></div>
          {/*mail*/}{" "}
          {mail != "" ? (
            <div className="flex items-center ">
              {" "}
              <a href={`mailto:` + mail}>
                <img className="w-20px h-auto" src={maillogo} />
              </a>{" "}
              <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                {mail}
              </p>{" "}
            </div>
          ) : (
            <div />
          )}
          {/*websitesi*/}{" "}
          {linklist.web != "" ? (
            <div className="flex items-center mt-10px">
              {" "}
              <a
                href={
                  linklist.web.includes("https://")
                    ? linklist.web
                    : `https://` + linklist.web
                }
              >
                <img className="w-20px h-auto" src={globeLogo} />{" "}
              </a>{" "}
              <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                {linklist.web}
              </p>{" "}
            </div>
          ) : (
            <div />
          )}
          {/*Sosyal medya*/}
          {
          socialmediamanager()
        }
        </div>
        <div className="mt-24px flex justify-end">
          <p className="text-janus-dark-blue font-roboto text-12px">
            Created by JANUS
          </p>
        </div>
      </div>
    </div>;
  }

  if(!isLoading){
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div class="h-screen w-screen py-5 flex z-10 relative justify-center px-60 bg-janus-site-blue">
          <div class="w-screen h-100%  ">
            <div class="flex justify-center items-center mt-5">
              <img src={janus} />

              <p class="font-sacramento text-7xl text-white ">
                e-mail Signature
              </p>
            </div>
            <div class="flex flex-row  justify-center h-3/4  shadow-2xl  rounded-3xl overflow-hidden bg-white mt-7 ">
            { signatureExist ? <div class=" flex flex-col  justify-center w-3/4  px-16  h-100%  ">
                {showCard()}
                </div> :  <div class=" flex flex-col  justify-center w-3/4  px-16  h-100%  "> <div className="w-100% flex justify-center"><img src={questionLogo} className="w-218px h-auto" />
               
                 </div>
                 <p class="font-roboto text-40px font-bold text-janus-dark-blue pt-20px">İmzanızı Bulamadık :(</p>
                </div>
  }
             <div class="flex flex-col justify-center h-100%  bg-mail-gray">
                <div class="flex flex-col ">
                  <p class=" text-line-gray px-16  text-l font-roboto mt-12">
                    Hadi, sen de mail imzanı oluşturmak için siteye
                    kaydolabilirsin!
                  </p>
                </div>
                <div class="mt-10">
                  <Link
                    to="/auth/SignUp"
                    class="  px-28 rounded-lg bg-janus-site-blue hover:bg-janus-blue-hover  mt-7 text-base text-white font-roboto disabled:opacity-50 py-2 "
                  >
                    Kaydol
                  </Link>
                </div>
                <div class=" flex flex-row px-4 items-center justify-center mt-3 ">
                  <p class="text-base text-input-gray font-roboto">
                    Zaten üye misin?
                  </p>
                  <Link
                    to="/auth/SignIn"
                    class="ml-1 text-base text-janus-dark-blue font-roboto"
                  >
                    Giriş yap
                  </Link>
                </div>
                <div class="flex  flex-col justify-center items-center mt-12">
                  {" "}
                  <img src={girlontable} class="  w-60 h-60"></img>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768} minWidth={415}>
        <div class="h-screen w-screen  flex z-10 relative items-center  justify-center bg-janus-site-blue px-8">
          <div class="w-screen h-100%  ">
            <div class="flex justify-center items-center mt-20">
              <div class="flex justify-center items-center">
                <img src={janus} />{" "}
              </div>

              <div className="flex justify-center items-center">
                {" "}
                <p class="font-sacramento text-4xl text-white mt-5 ">
                  e-mail Signature
                </p>{" "}
              </div>
            </div>
          
         { signatureExist ?  <div class="flex flex-row  justify-center h-2/4   shadow-2xl  rounded-2xl overflow-hidden bg-white mt-7 p-16">
              <div className=" mt-10 bg-white  shadow-hicard flex min-w-374px py-16 px-20 rounded-lg px-32">
                <div className="flex flex-col justify-center h-100%">
                  <img src={logo} className="w-72px h-72px" />
                </div>
                <div className="pl-30px  flex-1">
                  <div className="font-roboto  whitespace-nowrap  text-left font-bold text-mail-gray text-20px">
                    {fname + " " + lname}
                  </div>

                  <div className="font-roboto font-light text-14px text-left  text-mail-gray">
                    {title}
                  </div>
                  <div className="mt-28px">
                    {/*phone*/} <div></div>
                    {/*mail*/}{" "}
                    {mail != "" ? (
                      <div className="flex items-center ">
                        {" "}
                        <a href={`mailto:` + mail}>
                          <img className="w-20px h-auto" src={maillogo} />
                        </a>{" "}
                        <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                          {mail}
                        </p>{" "}
                      </div>
                    ) : (
                      <div />
                    )}
                    {/*websitesi*/}{" "}
                    {linklist.web != "" ? (
                      <div className="flex items-center mt-10px">
                        {" "}
                        <a
                          href={
                            linklist?.web?.includes("https://")
                              ? linklist?.web
                              : `https://` + linklist?.web
                          }
                        >
                          <img className="w-20px h-auto" src={globeLogo} />{" "}
                        </a>{" "}
                        <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                          {linklist.web}
                        </p>{" "}
                      </div>
                    ) : (
                      <div />
                    )}
                    {/*Sosyal medya*/}
                    {
                   socialmediamanager()
                    }
                  </div>
                  <div className="mt-24px flex justify-end">
                    <p className="text-janus-dark-blue font-roboto text-12px">
                      Created by JANUS
                    </p>
                  </div>
                </div>
              </div>
            </div> :  <div class=" flex flex-col  justify-center w-100%  pt-10px     "> <div className="w-100% flex justify-center"><img src={questionLogo} className="w-218px h-auto" />
               
               </div>
               <p class="font-roboto text-28px font-bold text-white pt-16px">İmzanızı Bulamadık :(</p>
              </div>}
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={415}>
        <div class="h-screen w-screen  flex z-10 relative justify-center bg-janus-site-blue">
          <div class="w-screen h-100%  ">
            <div class="flex flex-col justify-center items-center mt-20">
              <img src={janus} />
              <p class="font-sacramento text-4xl text-white mt-5 ">
                e-mail Signature
              </p>{" "}
            </div>
          {signatureExist ?  <div className=" mt-10 bg-white h-1/4 shadow-hicard flex min-w-374px py-8 px-10 rounded-lg">
              <div className="flex flex-col justify-center  h-100%">
                <img src={logo} className="w-72px h-72px" />
              </div>
              <div className="pl-30px  flex-1">
                <div className="font-roboto  whitespace-nowrap  text-left font-bold text-mail-gray text-20px">
                  {fname + " " + lname}
                </div>

                <div className="font-roboto font-light text-14px text-left  text-mail-gray">
                  {title}
                </div>
                <div className="mt-28px">
                  {/*phone*/} <div></div>
                  {/*mail*/}{" "}
                  {mail != "" ? (
                    <div className="flex items-center ">
                      {" "}
                      <a href={`mailto:` + mail}>
                        <img className="w-20px h-auto" src={maillogo} />
                      </a>{" "}
                      <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                        {mail}
                      </p>{" "}
                    </div>
                  ) : (
                    <div />
                  )}
                  {/*websitesi*/}{" "}
                  {linklist.web != "" ? (
                    <div className="flex items-center mt-10px">
                      {" "}
                      <a
                        href={
                          linklist.web.includes("https://")
                            ? linklist.web
                            : `https://` + linklist.web
                        }
                      >
                        <img className="w-20px h-auto" src={globeLogo} />{" "}
                      </a>{" "}
                      <p className="ml-12px font-roboto text-10px text-left  text-mail-gray">
                        {linklist.web}
                      </p>{" "}
                    </div>
                  ) : (
                    <div />
                  )}
                  {/*Sosyal medya*/}
                  {
                  socialmediamanager()
                }
                </div>
                <div className="mt-24px flex justify-end">
                  <p className="text-janus-dark-blue font-roboto text-12px">
                    Created by JANUS
                  </p>
                </div>
              </div>
            </div> : <div >SIGNATURE DOES NOT EXIST</div>}
          </div>
        </div>
      </MediaQuery>
    </div>

  );}
  else{
    return(<div></div>)
  }
}

export default NewHiCard;
