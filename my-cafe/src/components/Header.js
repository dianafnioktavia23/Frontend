import React from 'react'
import bannerImage from './header.jpeg'; 

const title = (
    <div>
      <h1 style={{
        color: 'white',
        fontSize: '2rem',
        marginBottom: '1rem',
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: '3rem' // Menggeser tulisan ke atas
      }}>Enjoy your <span style={{ color: 'brown' }}>Coffee</span></h1>
      <div style={{
        color: 'white',
        fontSize: '2rem',
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: '2rem' ,// Menggeser tulisan ke atas
       
      }}>Before your activity</div>
    </div>
  );
  
  const button = (
    <button style={{
      padding: '0,5rem 1rem',
      backgroundColor: 'brown',
      color: 'white',
      border: '2px solid white',
      borderRadius: '5px',
      cursor: 'pointer'
    }}>Pesan sekarang</button>
  );

const Header = () => {
  return (
    <div className='banner-section style-1' style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover' }}>
      <div className='container'>
        <div className='banner-content'>
          {title}

          {button}
        </div>
      </div>
    </div>
  );
  
}

export default Header