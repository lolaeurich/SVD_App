import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {blue} from './Constants';
import Field from './Field'

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 420, }}>

        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Cadastro
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Crie uma nova conta:
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>

          <Field placeholder="Primeiro nome" />
          <Field placeholder="Sobrenome" />
          <Field
            placeholder="E-mail"
            keyboardType={'email-address'}
          />
          <Field placeholder="Telefone" keyboardType={'number-pad'} />
          <Field placeholder="Senha" secureTextEntry={true} />
          <Field placeholder="Confirme sua senha" secureTextEntry={true} />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: "center",
              width: '80%',
              paddingRight: 16
            }}>

              <Text style={{color: 'grey', fontSize: 12}}>
                Ao se cadastrar, você concorda com os  
              </Text>
              <Text style={{color: blue, fontWeight: 'bold', fontSize: 12}}>
                Termos e Condições
              </Text>

          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
          </View>

          <Btn
            textColor="white"
            bgColor={blue}
            btnLabel="Cadastrar"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>

            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Já possui uma conta?{' '}
            </Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>

              <Text
                style={{color: blue, fontWeight: 'bold', fontSize: 16, paddingLeft: 45}}>
                Faça login.
              </Text>

            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;