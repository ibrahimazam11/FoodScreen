import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import StarRating from 'react-native-star-rating';

const review = () => (

    <View style={styles.container}>
        <Card style={styles.mainCard}>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                    <Body>
                        <Text>NativeBase</Text>
                        <StarRating
                            starSize={15}
                            containerStyle={{ width: 26 }}
                            disabled={true}
                            maxStars={5}
                            rating={3.25}
                            halfStarEnabled={true}
                            //selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'#ffcc00'}
                        />
                        <Text note style={{ fontWeight: 'bold', fontSize: 11 }}>Rated: 3.5</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody style={{ marginLeft: 20, marginRight: 15 }}>
                <Text style={{ fontSize: 14 }}>NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.</Text>
            </CardItem>
            <CardItem style={{marginBottom: -15}}> 
                <Button transparent>
                    <Icon active style={{ color: "#E53935" }} name="thumbs-up" />
                    <Text style={{ marginLeft: -15, color: "#E53935" }}>Like</Text>
                </Button>
            </CardItem>
        </Card>
    </View>

);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },
    mainCard: {
        borderColor: "#E53935", 
        padding: 5, 
        borderLeftWidth: 4, 
        borderRightWidth: 4, 
        borderTopLeftRadius: 6, 
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    }
});

export default review;