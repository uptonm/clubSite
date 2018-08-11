import React, { Component } from 'react'
import { fetchAll } from './actions/fetchNews'

class Newsletter extends Component {
    state = {
        newsletters: [],
        selected: {}
    }

    componentDidMount = async () => {
        const response = await fetchAll()
        this.setState({
            newsletters: response,
            selected: response[0]
        })
        console.log(this.state)
    }

    renderView() {
        if (!this.state.newsletters) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <div>
                    <img src={this.state.selected.image} width='100%' style={{paddingBottom: '10px'}} alt='header-img'/>
                    <h2>{this.state.selected.header}</h2>
                    <div className='row'>
                        <div className="col-6">
                            <span className="float-left">{this.state.selected.subheader}</span>
                        </div>
                        <div className="col-6">
                            <span className='float-right'>{this.state.selected.date}</span>
                        </div>
                    </div>
                    <hr style={{marginTop:'5px'}}/>
                    <p>{this.state.selected.body}</p>
                </div>
            )
        }
    }

    renderSidebar() {
        const news = this.state.newsletters.map(item => {
            return (
                <div className="list-group" key={item._id}>
                    <a onClick={() => this.setState({selected: item})} 
                        className={"list-group-item list-group-item-action flex-column align-items-start" + ((this.state.selected._id === item._id) ? ' active' : '')}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{item.header}</h5>
                            <small>{item.date}</small>
                        </div>
                        <p className="mb-1">{item.subheader}</p>
                        <div>{(item.body.length > 144) ? item.body.substring(0, 144) + '...' : item.body}</div>
                    </a>
                </div>
            )
        })
        return news
    }
    render() {
        return (
            <div className='container' style={{ paddingTop: '20px' }}>
                <h1 className="display-2">Newsletters</h1>
                <hr />
                <div className="row">
                    <div className="col">
                        {this.renderView()}
                    </div>
                    <div className="col-4">
                        {this.renderSidebar()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsletter