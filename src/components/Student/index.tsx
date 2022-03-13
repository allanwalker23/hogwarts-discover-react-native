import React from 'react';

import {
  Container,
  ContainerStudent,
  Image,
  NameStudent,
  Info,  
  BirthDate,
  House,
  HouseIcon,
} from './styles';


interface StudentProps{
  name:string;
  birthDate:string;
  image:string;
  house:'gryffindor' | 'slytherin' | 'hufflepuff' | 'ravenclaw' 
}

export function Student({name,birthDate,image,house}:StudentProps) {
  
  return (
    <Container>
        <ContainerStudent>
            <Image source={{uri:image}}/>
            <Info>
                <NameStudent>{name}</NameStudent>
                <BirthDate>{birthDate}</BirthDate>
            </Info>
        </ContainerStudent>

        <House>
          {house === 'gryffindor'&&(
            <HouseIcon source={require(`../../../assets/gryffindor.png`)}/>
          )}

           {house === 'ravenclaw'&&(
            <HouseIcon source={require(`../../../assets/ravenclaw.png`)}/>
          )}

          {house === 'slytherin'&&(
            <HouseIcon source={require(`../../../assets/slytherin.png`)}/>
          )}

          {house === 'hufflepuff'&&(
            <HouseIcon source={require(`../../../assets/hufflepuff.png`)}/>
          )}
          
        </House>
    </Container>
  );
}