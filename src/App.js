import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 50;
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
         <LoadingBar
        color='#f11946'
        height= {3}
        progress={this.state.progress}
      />
        <NavBar />
        
        <Routes>
          
          {/* <NavBar /> */}
          {/* <News setProgress= gress}  pageSize={this.pageSize} country="in" category="sports" /> */}
          <Route exact path='/' element={<News setProgress= {this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="General" />} />
          <Route exact path='/business' element={<News setProgress= {this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="Business" />} />
          <Route exact path='/entertainment' element={<News setProgress= {this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
          <Route exact path='/health' element={<News setProgress= {this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="Health" />} />
          <Route exact path='/science' element={<News setProgress= {this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="Science" />} />
          <Route exact path='/sports' element={<News setProgress= {this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="Sports" />} />
          <Route exact path='/technology' element={<News setProgress= {this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="Technology" />} />
          <Route exact path='/general' element={<News setProgress= {this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="General" />} />

        </Routes>
       
      </div>
      
    )
  }
}

// export default App;
