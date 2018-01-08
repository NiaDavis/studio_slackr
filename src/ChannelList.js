import React from 'react';

export default class ChannelList extends React.Component {
    constructor(props){
         super(props);
         this.state = {
             channels: {},
             newChannelName: '',
             selected: null,
         };
    }
render(){
     var channelButtons = [];
    for(var channel in this.state.channels) {
      channelButtons.push(
        <ListItem key={channel}
          button disabled={this.state.selected === channel}
          onClick={this.setSelectedChannel.bind(this, channel)}>
          <ListItemText primary={this.state.channels[channel].name}/>
        </ListItem>
      );
    }
    return(
      <div className="ChannelList">
        <header className="ChannelList-header">Channels</header>
        <List className="ChannelButtons">{channelButtons}</List>
        <form onSubmit={this.TODO}>
          <Input placeholder="Add Channel" label="Channel Name"
            value={this.state.newChannelName} onChange={this.TODO}/>
          <Button type="submit">
            Add
          </Button>
        </form>
      </div>
    );
}}