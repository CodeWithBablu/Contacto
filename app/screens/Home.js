import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import colors from '../config/colors';
import SPACING from '../config/SPACING';
import { FONTS, SHADOWS } from '../config/index';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { selectContactData, setContactData } from '../../slices/contactSlices';
import { useDispatch, useSelector } from 'react-redux';

import Toast from 'react-native-toast-message';

import contactUs from "../../assets/contactUs.gif";

const Home = () => {

  const dispatch = useDispatch(); // Redux

  var contact = useSelector(selectContactData);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState(null);


  // useEffect(() => {
  //   setAddress(User.address);
  //   setPhone(User.phone);
  // }, [User])

  const save_Name = async () => {

    contact = { ...contact, name: name };

    dispatch(setContactData(contact));

    Toast.show({
      type: 'success',
      text1: 'Name',
      text2: 'Name successfully added 😍️'
    });


  }




  const showError = () => {
    Toast.show({
      type: 'error',
      text1: 'Not Logged in',
      text2: 'Please Login to add Details 👋'
    });
  }



  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
      padding: SPACING,
    }}>
      <SafeAreaView style={{
        marginBottom: SPACING * 5,
        backgroundColor: colors.dark,
      }}>

        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{
            alignItems: "center",
          }}>


            <View style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              padding: SPACING,
            }}>
              <Image style={{
                width: "30%",
                height: SPACING * 18,
                borderRadius: SPACING * 3,
              }}
                resizeMode="contain"
                source={contactUs}
              />

              <View style={{
                width: "70%",
                borderRadius: SPACING * 3,
                justifyContent: "center",
                padding: SPACING,
              }}
              >

                <Text style={{
                  fontFamily: FONTS.bold,
                  fontSize: SPACING * 3,
                }}>Contact us</Text>

                <Text style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SPACING * 2,
                  color: colors.light,
                }}>We will always there for you!! 🤗️</Text>

              </View>

            </View>


          </View >



          <View style={{
            alignItems: "center",
            marginTop: SPACING * 2,
            marginBottom: SPACING * 4,
          }}>


            {/* <TouchableOpacity style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Address</Text>

              <TextInput
                style={styles.textinputStyle}
                defaultValue={User.address && User.address != '' ? User.address : null}
                value={address}
                onChange={(e) => setAddress(e.nativeEvent.text)}
                placeholder="where did you live..."
                placeholderTextColor={colors.profile.text}
                keyboardType="default"
              />

              <TouchableOpacity style={styles.saveBtnStyle}
                onPress={User.email ? () => save_Address() : () => showError()}>
                <Ionicons name='checkmark-done' size={SPACING * 5} />
              </TouchableOpacity>

            </TouchableOpacity> */}

            <TouchableOpacity style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Name</Text>

              <TextInput
                style={styles.textinputStyle}
                defaultValue={null}
                value={name}
                onChange={(e) => setName(e.nativeEvent.text)}
                placeholder="Your Name..."
                placeholderTextColor={colors.profile.text}
                keyboardType="default"
              />

            </TouchableOpacity>

            <TouchableOpacity style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Email</Text>

              <TextInput
                style={styles.textinputStyle}
                defaultValue={null}
                value={email}
                onChange={(e) => setEmail(e.nativeEvent.text)}
                placeholder="Your Email..."
                placeholderTextColor={colors.profile.text}
                textContentType="emailAddress"
                keyboardType="email-address"
              />

            </TouchableOpacity>

            <TouchableOpacity style={styles.saveViewBoxStyle}>

              <Text style={styles.labelStyle}>Phone</Text>

              <TextInput
                style={styles.textinputStyle}
                defaultValue={null}
                value={phone}
                onChange={(e) => setPhone(e.nativeEvent.text)}
                placeholder="You Phone no..."
                placeholderTextColor={colors.profile.text}
                textContentType="telephoneNumber"
                maxLength={10}
                keyboardType="number-pad"
              />

            </TouchableOpacity>




            <TouchableOpacity style={{
              flex: 1,
              width: "95%",
              marginTop: SPACING * 3,
              borderRadius: SPACING * 2,
              backgroundColor: colors.profile.secondary,
            }}>

              <Text style={styles.labelStyle}>Message</Text>

              <TextInput
                style={{
                  width: "95%",
                  minHeight: SPACING * 15,
                  fontSize: SPACING * 1.6,
                  fontFamily: FONTS.bold,
                  color: colors.profile.text,
                  paddingLeft: SPACING * 2.5,
                }}
                defaultValue={null}
                value={message}
                onChange={(e) => setMessage(e.nativeEvent.text)}
                placeholder="Maximum word limit is 500 ..."
                placeholderTextColor={colors.profile.text}
                multiline={true}
                numberOfLines={4}
                maxLength={500}
              />

            </TouchableOpacity>

            <TouchableOpacity style={{
              backgroundColor: colors.profile.btn,
              width: SPACING * 20,
              height: SPACING * 8,
              marginTop: SPACING * 2.5,
              padding: SPACING * 2,
              borderRadius: SPACING * 3,
              flexDirection: "row",
              alignItems: "center",
            }}>

              <Ionicons
                style={{
                  width: "30%",
                }}
                name="paper-plane"
                color={colors.dark}
                size={SPACING * 4}
              />

              <Text style={{
                width: "70%",
                textAlign: "center",
                color: colors.dark,
                fontFamily: FONTS.bold,
                fontSize: SPACING * 2,
              }}>Submit</Text>

            </TouchableOpacity>


          </View>

        </ScrollView>

      </SafeAreaView >
    </View >
  )
}

const styles = StyleSheet.create({
  saveViewBoxStyle: {
    width: "95%",
    marginTop: SPACING * 3,
    height: SPACING * 6.2,
    borderRadius: SPACING * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.profile.secondary,
  },
  labelStyle: {
    position: "absolute",
    top: -SPACING + 12,
    left: SPACING * 1.5,
    fontSize: SPACING * 1.6,
    fontFamily: FONTS.semiBold,
    color: colors.profile.primary,
  },
  saveBtnStyle: {
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.profile.primary,
    borderTopRightRadius: SPACING * 2,
    borderBottomRightRadius: SPACING * 2,
  },
  textinputStyle: {
    width: "95%",
    marginTop: SPACING * 1.5,
    fontSize: SPACING * 1.6,
    fontFamily: FONTS.bold,
    color: colors.profile.text,
    paddingLeft: SPACING * 2.5,
    paddingRight: SPACING,
  },
  textStyle: {
    marginTop: SPACING * 2.5,
    fontSize: SPACING * 1.6,
    fontFamily: FONTS.bold,
    color: colors.profile.text,
    paddingLeft: SPACING * 2.5,
    overflow: "scroll",
    paddingRight: SPACING,
  }
})

export default Home;