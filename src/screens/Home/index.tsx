import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Animated, { Easing, useAnimatedStyle,SlideInRight, useSharedValue, withSpring } from 'react-native-reanimated';
import { Background } from '../../components/Background';
import Header from '../../components/Header';
import { Student } from '../../components/Student';
import api from '../../services/api';

import {
  Container, FlatListStudents, Label
} from './styles';
 export interface Student{
  id:string;
   name:string;
   birthDate:string;
   image:string;
   house:string
 }

export function Home() {
  const headerCount = useSharedValue(-200)
  const studentCount = useSharedValue(-10000)
  const [students,setStudents]=useState<Student[]>([])
  const config = {
      duration: 2000,
      easing: Easing.linear
    };
  
    const headerContainerStyle = useAnimatedStyle(() => {
      return {
       
        marginLeft:withSpring(headerCount.value,{velocity:200}),
        
      };
    });

    const studentContainerStyle = useAnimatedStyle(() => {
      return {
       
        marginTop:withSpring(studentCount.value,{stiffness:30}),
        
      };
    });

    function getStudents(){
      api.get('/characters').then(response=>{
        const data = response.data;
        const students: Student[] = [];

       for(let i = 0; i <= 15; i++){
        
         const newData: Student = {
          id:data[i].name,
         name:data[i].name,
         birthDate:data[i].dateOfBirth || 'Data desconhecida',
         image:data[i].image,
         house:data[i].house.toLowerCase()
      };
     
       
      students.push(newData);
       }
       setStudents(students);
        });
        
        
      
    }

    useEffect(() => {
      getStudents();
      setTimeout(()=>{
        headerCount.value=0
       
      },1000)

      setTimeout(()=>{
       
        studentCount.value=0
      },3000)
    },[])

    
  return (
    <Background>
        <Container>
            <Animated.View style={headerContainerStyle}>
              <Header name='Hipolito' />
            </Animated.View>
           
            <Animated.View entering={SlideInRight} style={studentContainerStyle}>
              <Label>Bruxos</Label>
              
              
                <FlatListStudents
                    data={students}
                    showsVerticalScrollIndicator
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Student
                        name={item.name}
                        birthDate={item.birthDate}
                        image={item.image}
                        house={item.house}
                        />
                    )}
                />
            

            </Animated.View>
        </Container>
    </Background>
  );
}