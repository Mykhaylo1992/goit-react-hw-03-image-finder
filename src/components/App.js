import React, { Component } from 'react'
import Form from './form/Form';
import {getData} from '../services/services';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from "./modal/Modal";
import styles from "./app.module.css"



class App extends Component {
    state = { 
        query: "",
        page: 1,
        images: [],
        isLoading:false,
        isModalOpen:false,
        curentImage:""

     }

     componentDidMount() {
       getData().then(data => this.setState({images:data.data.hits}))
     }

     
     handleChange = (e) => {
       this.setState({query:e.target.value}) 
      }
      
      getImages = (query="cat",page=1) =>{
        this.setState(prevstate =>({isLoading:true,images:page === 1?[]:prevstate.images}))
        getData(this.state.query, this.state.page)
      .then(data => this.setState(prevstate =>({images:[...prevstate.images,...data.data.hits]})))
      .then(() => this.setState({isLoading:false})) 
      .finally(() => this.setState({isLoading:false})) 
    }
    
    handleSubmit = (e) => {
      e.preventDefault()
      this.getImages(this.state.query)
       this.setState(prevstate  => ({
         page:prevstate.page+1
        }))
        
      }
      handleClick =()=>{
        console.log('click')
        this.getImages(this.state.query, this.state.page)
        this.setState(prevstate  => ({
          page:prevstate.page+1
        }))
      }
      openModal = (e) =>{ 
        const url = (e.target.dataset.largeurl)
        this.setState(prevstate => ({isModalOpen : !prevstate.isModalOpen, curentImage : url}))
      }
      closeModal = () =>{
        this.setState({isModalOpen:false})
      }


      escFunction = (event)  =>{
        console.log(event)
        if(event.keyCode === 27) {
          console.log(this)
          //Do whatever when esc is pressed
          this.closeModal()
        }
      }
      componentDidMount(){
      document.addEventListener("keydown", this.escFunction, false);
      }
      
      componentDidUpdate () {
      window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
      });
      }
     
      componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
      }
      
      
      
    render() {
        return (
            <div className={styles.App}>
            <Form handleChange={this.handleChange} inputValue={this.state.query} handleSubmit={this.handleSubmit}/>
            {this.state.isLoading?<Loader/>:<ImageGallery openModal={this.openModal} images={this.state.images}/>}
            <Button handleClick={this.handleClick}/>

            {this.state.isModalOpen && (
          <Modal curentImage={this.state.curentImage} closeModal={this.closeModal} />)} 


            </div>
        );
    }
}

export default App;