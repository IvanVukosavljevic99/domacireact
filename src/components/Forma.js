function Forma(){
 
    return(
        <div className="center">
            <h3>Pišite nam</h3>
            <div id='poruciVino'>
                <form >
                    <input type="text" placeholder='Ime' className='razmak'  />
                    <input type="text" placeholder='Prezime' className='razmak' />
                    <input type="email" placeholder='Mail' className='razmak' />
                    <input type="text" placeholder='Broj telefona' className='razmak' />
                    <button  onClick={()=>{ alert('Uspesno ste se poslali poruku!');}} className='razmak'>Pošalji</button>
                </form>
            </div>
           
        </div>
        
       
    );
}
export default Forma;