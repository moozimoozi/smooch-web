import React from 'react';

function Loading() {
    return <div className='image-overlay'>
               <div className='three-bounce spinner'>
                   <div className='bounce1'></div>
                   <div className='bounce2'></div>
                   <div className='bounce3'></div>
               </div>
           </div>;
}
