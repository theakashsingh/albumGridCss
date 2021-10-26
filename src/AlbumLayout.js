import React, { useState } from "react";
import "./AlbumLayout.css";
import Data from "./Data";

const AlbumLayout = () => {

  const [data, setData] = useState(Data)
  return (
    <>

    
      <div className="albums">
        
        {
          data.map((item) => 
          <div className="album">
          <img
            src={item.image}
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>{item.title}</h2>
            <p className="album-artist">{item.artist}</p>
            <p className="album-desc">
              {item.description1}
            </p>
            <p className="album-desc">
             {item.description2}
            </p>
          </div>
        </div>
          )
        }


        {/* <div className="album">
          <img
            src="https://picsum.photos/150/150?random=2"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>


        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=3"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=4"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=5"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=6"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=7"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=8"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=9"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=10"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=11"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=12"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>




          <div className="album">
          <img
            src="https://picsum.photos/150/150?random=13"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=14"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>



        <div className="album">
          <img
            src="https://picsum.photos/150/150?random=15"
            alt=""
            className="art-work"
          />
          <div className="album-details">
            <h2>Album Title</h2>
            <p className="album-artist">Artist Name</p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate explicabo sequi deleniti.
            </p>
            <p className="album-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda porro commodi sint.
            </p>
          </div>
        </div>
        </div> */}
      </div>
    </>
  );
};

export default AlbumLayout;
