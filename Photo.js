import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

const photo = () => (

    <View style={styles.container}>
        <Card style={styles.mainCard}>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: "https://www.cheme.cornell.edu/engineering/customcf/iws_ai_faculty_display/ai_images/mjp31-profile.jpg" }} />
                    <Body>
                        <Text>Jason Roy</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody style={{ marginTop: 10, marginLeft: 20, marginRight: 15 }}>
                <Thumbnail style={{ marginRight: 7 }} square large source={{ uri: "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg" }} />
                <Thumbnail style={{ marginRight: 7 }} square large source={{ uri: "https://peacockelite.com/wp-content/uploads/2017/05/DUM-BIRYANI-3.png" }} />
                <Thumbnail style={{ marginRight: 7 }} square large source={{ uri: "http://www.sinmordazaentrerios.com/images/noticias/grandes/33217_parana.jpg" }} />
            </CardItem>
            <CardItem style={{ marginBottom: -15 }}>
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

export default photo;