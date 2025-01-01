  import {React,useEffect,useState} from 'react'
  import { useNavigate } from 'react-router-dom';
  function Check() {
      const [hasLocalStorageData, setHasLocalStorageData] = useState(false);
      const navigate = useNavigate();
      useEffect( () => {
          if(localStorage.length > 0){
              setHasLocalStorageData(true)
              navigate('/')
          }else{
              setHasLocalStorageData(false)
              navigate('/register')
          }
      
      }, [])


    
    return (
      <div>
      
    </div>
    )
  }

  export default Check