import React from "react";
import left from "../images/left.png";
import letter from "../images/letter.png";
import phone from "../images/phone.png";
import linkedinImg from "../images/linkedin.png";
import right from "../images/right.png";
import world from "../images/world.png";
import imageToBase64 from "image-to-base64/browser";

import { useCallback, useEffect, useState, useRef } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
function CardTest({ imageUrlLeft, imageUrlRight, webSite }) {

  const storage = getStorage();
  const references =[];
 const letterReference = ref(storage, 'alim/letter.png');
const linkedinReference = ref(storage, 'alim/linkedin.png');
const phoneReference = ref(storage, 'alim/phone.png');
const worldReference = ref(storage, 'alim/world.png');
  references.push(letterReference);
  references.push(linkedinReference);
  references.push(phoneReference);
  references.push(worldReference);
  async function someFunction() {
    
   for(const i in references)
    {
    await  getDownloadURL(references[i])
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
  
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      if(i == 0){
      console.log('one worked');
      const img = document.getElementById('letterImage');
      img.setAttribute('src', url);
      
      }
      else if(i==1)
      {
        const img1 = document.getElementById('linkedinImage');
        img1.setAttribute('src', url);
       
      }
      else if (i == 2)
        {
          const img2 = document.getElementById('phoneImage');
        img2.setAttribute('src', url);
       
        }
        else if( i==3)
        {
          const img3 = document.getElementById('worldImage');
          img3.setAttribute('src', url);
        
        }
     
      console.log(url);

    })
    .catch((error) => {
      // Handle any errors
    });
  
    }
}
  useEffect(async() => {
   
    someFunction();

  
   
 }, [])
  


  
  const canvasRef = useRef(null);
  const tableRef = useRef(null);
  const imageRef = useRef(null);
  const mailRef = useRef(null);
  const webRef = useRef(null);
  const linkedinRef = useRef(null);
  const webImageRef = useRef(null);

  const [numChildren, setNumChildren] = useState(0);

  const children = [];

  const [name, setName] = useState("Lorem ipsum");
  const [title, setTitle] = useState("dolor sit amet");
  const [number, setNumber] = useState("consectetur");
  const [email, setEmail] = useState("adipiscingelit@gmail.com");
  const [linkedin, setLinkedIn] = useState("https://tr.linkedin.com/");
  const web = webSite;

  //Mail Imzasinin Icini Dolduran Fonksiyon
  function createCard(name, title, linkedinSite, website, tel, mail) {
    const ChildComponent = (props) => (
      <img class="w-300px h-32px" src={props.source} />
    );
    const ChildComponentName = (props) => (
      <img class="w-400px" src={props.source} />
    );

    if (numChildren == 1) {
      const canvas = document.createElement("CANVAS");
      canvas.width = 300;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      ctx.font = "500 16px Roboto";
      ctx.fillStyle = "#1F5890";

      ctx.fillText(tel, 6, 22);

      children.push(<ChildComponent source={canvas.toDataURL()} />);

      ctx.clearRect(0, 0, 300, 32);
      ctx.fillText(mail, 6, 22);
      children.push(<ChildComponent source={canvas.toDataURL()} />);

      ctx.clearRect(0, 0, 300, 32);
      canvas.width = 400;
      canvas.height = 150;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "700 32px Roboto";
      ctx.fillStyle = "#1F5890";
      ctx.fillText(name, 13, 90);

      ctx.font = "300 20px Roboto";
      ctx.fillStyle = "#1F5890";
      ctx.fillText(title, 13, 115);
      children.push(<ChildComponentName source={canvas.toDataURL()} />);

      mailRef.current.href = `mailto:${mail}`;
      linkedinRef.current.href = linkedinSite;
      webRef.current.href = website;

      ctx.clearRect(0, 0, 400, 150);
      canvas.width = 300;
      canvas.height = 32;

      const webImage2 = document.createElement("IMG");
      webImage2.src = world;
      ctx.drawImage(webImage2, 0, 0);
      webImageRef.current.src = canvas.toDataURL();
      console.log(name);
    }
  }
  const imageRightRef = useCallback((catImageNode) => {
    /*  const canvas = document.createElement('CANVAS');
      canvas.width= catImageNode.width;
      canvas.height = catImageNode.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(catImageNode, 0, 0);
      catImageNode.src = canvas.toDataURL();
*/
  }, []);

  //FONKSIYONU CALISTIR
  createCard(name, title, linkedin, web, number, email);

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  return (
    <div>
      <p>Test </p>
      <div
        class="row mt-5 border p-4 inline-block"
        ref={tableRef}
        id="mailimza"
      >
        <table cellPadding="0" cellspacing="0" class="w-760px">
          <tbody>
            <tr>
              <td class="w-215px pr-10">
                <a>
                  <img
                    class="max-width-100% max-height-100%"
                   
                    src={imageUrlLeft}
                    id="compecleft"
                  
                  />
                </a>
              </td>
              <td class="w-400px">
                <table cellPadding="0" cellspacing="0" class="w-400px h-300px">
                  <tbody>
                    <tr>
                      <td id="show_img_here" class="w-200px h-150px">
                        {children[2]}
                      </td>
                    </tr>
                    <tr>
                      <td class="w-200px h-150px">
                        <table
                          class="w-400px h-150px"
                          cellPadding="0"
                          cellspacing="0"
                        >
                          <tbody>
                            <tr class="h-34px" class="align-top">
                              <td>
                                <img src={phone} id="phoneImage" />
                              </td>
                              <td class="h-50px w-300px" id="show_phone_here">
                                {children[0]}
                              </td>
                            </tr>

                            <tr class="h-34px" class="align-top">
                              <td>
                                <a ref={mailRef} id="letterLink" href="">
                                  <img src={letter} id="letterImage" />
                                </a>
                              </td>
                              <td class="h-50px w-300px" id="show_letter_here">
                                {children[1]}
                              </td>
                            </tr>
                            <tr class="align-top">
                              <td class="w-40px">
                                <a ref={linkedinRef} id="linkedinLink">
                                  <img src={linkedinImg} id="linkedinImage" />
                                </a>
                              </td>

                              <td class="w-40px">
                                <a class="w-300px" ref={webRef}>
                                  <img
                                    ref={webImageRef}
                                    src={world}
                                    id="worldImage"
                                  />
                                </a>
                              </td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td class="w-145px">
                <img
                  src={imageUrlRight}
                  class="max-width-100% max-height-100%"
                  id="compec-right"
                
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="inline-block ">
          <div className="flex grow-1 mt-3  justify-between items-center">
            <p className="mt-5  text-xl font-semibold font-Roboto">Name</p>

            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="ml-10 border-2 rounded-md border-blue-400 focus:border-blue-500 px-5 focus:outline-none h-8 mt-5"
            />
          </div>
          <div className="flex grow-1 mt-3 justify-between items-center">
            <p className="mt-5 text-xl font-semibold font-Roboto">Title</p>

            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="ml-10 border-2 rounded-md border-blue-400 focus:border-blue-500  px-5 focus:outline-none h-8 mt-5"
            />
          </div>
          <div className="flex grow-1 mt-3  justify-between items-center">
            <p className="mt-5  text-xl font-semibold font-Roboto">
              Phone Number
            </p>

            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="ml-10 border-2 rounded-md border-blue-400 focus:border-blue-500 px-5 focus:outline-none h-8 mt-5"
            />
          </div>
          <div className="flex grow-1  mt-3 justify-between items-center">
            <p className="mt-5  text-xl font-semibold font-Roboto">Mail</p>

            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="ml-10 border-2 rounded-md border-blue-400 focus:border-blue-500 focus:outline-none h-8 mt-5 px-5"
            />
          </div>

          <div className="flex grow-1 mt-3  justify-between items-center">
            <p className="mt-5  text-xl font-semibold font-Roboto">linkedin</p>

            <input
              onChange={(e) => {
                setLinkedIn(e.target.value);
              }}
              className="ml-10 border-2 rounded-md border-blue-400 focus:border-blue-500 focus:outline-none h-8 mt-5 px-5"
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            class="bg-janus-blue p-5 px-10 rounded-xl text-white text-xl font-bold "
            onClick={() => {
              setNumChildren(1);
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTest;
