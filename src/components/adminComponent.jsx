import React from 'react'
import Admintitle from './admin/Admintitle'
import AdminAddItems from './admin/AdminAddItems'
import '../css/adminComponent.css'

const adminComponent = () => {
  return (
    <div className='admin__container'>

      <Admintitle />


      <div className='admin__field'>
        <div className='option-items'>
            <AdminAddItems />
        </div>
        <div className='option-field'>
            ddddd
        </div>
      </div>
     

    </div>
  )
}

export default adminComponent