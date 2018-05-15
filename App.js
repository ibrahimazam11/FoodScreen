import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Tab, Tabs } from 'native-base';
import StarRating from 'react-native-star-rating';

import Review from './Review';
import Photo from './Photo';
import Video from './Video';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card style={{ backgroundColor: '#E53935' }}>
            <CardItem cardBody>
              <Image source={{ uri: "https://peacockelite.com/wp-content/uploads/2017/05/DUM-BIRYANI-3.png" }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <View style={{ position: 'absolute', top: 160, alignSelf: 'center', zIndex: 1 }}>
              <Thumbnail large source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-s/0f/df/99/a9/delhi-darbar.jpg" }} />
            </View>
            <CardItem style={{ backgroundColor: '#E53935', marginTop: 25 }}>
              <Left>
                <Body>
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>Chicken Biryani</Text>
                  <StarRating
                    starSize={20}
                    containerStyle={{ width: 26 }}
                    disabled={true}
                    maxStars={5}
                    rating={3.25}
                    halfStarEnabled={true}
                    //selectedStar={(rating) => this.onStarRatingPress(rating)}
                    fullStarColor={'#ffcc00'}
                  />
                  <Text note style={{ color: '#fff' }}>Serves:</Text>
                  <Text note style={{ color: '#fff' }}>Recipe:</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text style={{ color: '#fff' }}>250 PKR</Text>
                  <CardItem style={{ backgroundColor: '#E53935' }}>
                    <Icon active name="md-card" style={styles.icon} />
                    <Icon active name="md-restaurant" style={styles.icon} />
                    <Icon active name="md-bus" style={{ color: '#fff' }} />
                  </CardItem>
                  <CardItem style={{ marginTop: -15, backgroundColor: '#E53935' }}>
                    <Text note style={{ fontSize: 12, color: '#fff' }}>Cards | </Text>
                    <Text note style={{ fontSize: 12, color: '#fff' }}>DineIn | </Text>
                    <Text note style={{ fontSize: 12, color: '#fff' }}>Delivery</Text>
                  </CardItem>
                </Body>
              </Right>
            </CardItem>
            <CardItem style={{ backgroundColor: '#E53935' }}>
              <Left>
                <Button rounded style={styles.reactionButton}>
                  <Icon active name="heart" style={styles.reactionIcon} />
                  <Text>12</Text>
                </Button>
                <Button rounded style={styles.reactionButton}>
                  <Icon active name="star" style={styles.reactionIcon} />
                  <Text>5</Text>
                </Button>
                <Button rounded style={styles.reactionButton}>
                  <Icon active name="reorder" style={styles.reactionIcon} />
                  <Text>5</Text>
                </Button>
              </Left>
              <Right>
                <Body>
                  <Button rounded style={{ backgroundColor: '#FFB300' }}>
                    <Icon active name="md-cart" />
                  </Button>
                </Body>
              </Right>
            </CardItem>
            <Container style={{ backgroundColor: 'white' }}>
              <Header hasTabs androidStatusBarColor="#E53935" style={{ height: 10, backgroundColor: "#E53935" }} />
              <Tabs tabBarUnderlineStyle={{ backgroundColor: "#E53935" }} tabBarInactiveTextColor="black" initialPage={0}>
                <Tab activeTabStyle={{ backgroundColor: "white" }} tabStyle={{ backgroundColor: "white" }} activeTextStyle={{ color: "#E53935" }} heading="Reviews">
                  <Button block style={{ margin: 5, backgroundColor: "#E53935" }}><Icon name="home" /><Text style={{ marginLeft: -15 }}>Write a Review</Text></Button>
                  <Review />
                </Tab>
                <Tab activeTabStyle={{ backgroundColor: "white" }} tabStyle={{ backgroundColor: "white" }} activeTextStyle={{ color: "#E53935" }} heading="Photos">
                  <Button block style={{ margin: 5, backgroundColor: "#E53935" }}><Icon name="home" /><Text style={{ marginLeft: -15 }}>Upload a Photo</Text></Button>
                  <Photo />
                </Tab>
                <Tab activeTabStyle={{ backgroundColor: "white" }} tabStyle={{ backgroundColor: "white" }} activeTextStyle={{ color: "#E53935" }} heading="Videos">
                  <Button block style={{ margin: 5, backgroundColor: "#E53935" }}><Icon name="home" /><Text style={{ marginLeft: -15 }}>Upload a Video</Text></Button>
                  <Video />
                </Tab>
              </Tabs>
            </Container>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start'
  },
  icon: {
    marginRight: 12,
    color: '#fff'
  },
  reactionIcon: {
    marginRight: -10
  },
  reactionButton: {
    width: 63,
    margin: 1,
    backgroundColor: '#FFB300'
  }
});
