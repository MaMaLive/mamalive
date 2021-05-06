import React from 'react';
import {Flex, Image, Text, Heading} from '@chakra-ui/react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export function Carousel(){
    return (
      <div
        style={{backgroundColor:'#e6e6e6'}}
      >

        <div
          style={{width:'100%', maxWidth:'1140px', margin: '0 auto'}}
        >

            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={5}
              infinite
              interval={5000}
              isPlaying
            > 
              <Slider style={{ maxHeight:'31rem'}}>
                <Slide index={0}>
                  <Flex
                    mt='4.5rem'
                    p='0 1rem'
                  >
                    <Flex
                      flexDirection='column'
                      w='45%'
                      justify='space-between'
                      mr='0.5rem'
                    >

                      <Heading
                        fontSize='52px'
                        lineHeight='100%'
                        // mb='0.5rem'


                      >
                        AVENTURAS &amp;AVENTUREIROS
                      </Heading>
                      <Heading
                        fontSize='37px'
                        // mb='0.5rem'

                      >
                        VANDER DISSENHA
                      </Heading>
                      <Text
                        fontSize='33px'
                        // mb='0.5rem'
                      >
                        Terça das 20h às 21h
                      </Text>
                      <Text
                      
                      >
                          Viagens, aventuras, trilhas, esportes na natureza. Sempre com participações de pessoas que 
                          tiveram momentos incríveis, histórias, perrengues e aventuras emocionantes. O programa Aventuras
                          &amp; Aventureiros é o local certo para saber sobre aquela viagem ou aquela aventura para se 
                          divertir e fugir da rotina do dia a dia.
                      </Text>
                    </Flex>
                    <Image
                      w="55%"
                      h="100%"
                      objectFit="contain"
                      src="/images/Avent.jpg"
                      alt="MaMa Live" 
                    />
                  </Flex>
                </Slide>
                <Slide index={1}>
                <Flex
                  mt='4.5rem'
                >
                    <Flex
                      flexDirection='column'
                      w='45%'
                      justify='space-between'
                      mr='1rem'
                    >

                      <Heading
                        fontSize='64px'
                      >
                        PODSERLEGAL
                      </Heading>
                      <Heading
                      fontSize='33px'

                      >
                        PROF. RAFAEL CALLEGARI E CARLOS AUGUSTO
                      </Heading>
                      <Text
                        fontSize='33px'
                      >
                        Quarta das 12h às 15h
                      </Text>
                      <Text
                      
                      >
                          Direito não precisa ser chato, ele pode ser divertido. De uma forma diferente, linguagem mais 
                          dinâmica e didática os temas do direito são debatidos, historicizados e colocados em uma 
                          pespectiva interdisciplinar.
                      </Text>
                    </Flex>
                    <Image
                      w="55%"
                      h="100%"
                      objectFit="contain"
                      src="/images/PodserLegal.jpg"
                      alt="MaMa Live" 
                    />
                  </Flex>
                </Slide>
                <Slide index={2}>
                <Flex
                  mt='4.5rem'
                  p='0 1rem'
                >
                    <Flex
                      flexDirection='column'
                      w='45%'
                      justify='space-between'
                    >

                      <Heading
                        fontSize='67px'
                        lineHeight='100%'

                      >
                        EDUCAÇÃO E ARTE
                      </Heading>
                      <Heading
                      fontSize='37px'

                      >
                        CÍCERO PEREIRA DE SOUZA
                      </Heading>
                      <Text
                        fontSize='33px'
                      >
                        Quinta das 18:30h às 19:30h
                      </Text>
                      <Text
                      
                      >
                          Arte, conhecimentos, ciências, tecnologias, culturas e histórias. Estejam conosco.
                      </Text>
                    </Flex>
                    <Image
                      w="55%"
                      h="100%"
                      objectFit="contain"
                      src="/images/EducArt.jpg"
                      alt="MaMa Live" 
                    />
                  </Flex>

                </Slide>
                <Slide index={3}>
                <Flex
                  mt='4.5rem'
                >
                    <Flex
                      flexDirection='column'
                      w='45%'
                      justify='space-between'
                      mr='2rem'
                    >

                      <Heading
                        fontSize='67px'

                      >
                        HORA7NEWS
                      </Heading>
                      <Heading
                      fontSize='33px'

                      >
                        PROF. RAFAEL CALLEGARI E DIONE CLEI VALÉRIO
                      </Heading>
                      <Text
                        fontSize='33px'
                      >
                        Diariamente das 7h às 7:50h
                      </Text>
                      <Text
                      
                      >
                          Começar seu dia bem informado com um Resumo das principais notícias de Campo Mourão, Paraná, 
                          Brasil e do mundo. Sempre com curiosidades e comentários pontuais para te dar uma outra visão 
                          dos fatos.
                      </Text>
                    </Flex>
                    <Image
                      w="55%"
                      h="100%"
                      objectFit="contain"
                      src="/images/H7N.jpg"
                      alt="MaMa Live" 
                    />
                  </Flex>
                  
                </Slide>
                <Slide index={4}>
                <Flex
                  mt='4.5rem'
                  p='0 1rem'
                >
                    <Flex
                      flexDirection='column'
                      w='45%'
                      justify='space-between'
                      mr='2rem'
                    >

                      <Heading
                        fontSize='67px'
                        lineHeight='100%'
                        mb='0.5rem'

                      >
                        CIDADE EM FOCO
                      </Heading>
                      <Heading
                        fontSize='33px'

                      >
                        ANDRÉ LUIZ ALVES E ROBERTA SERATO
                      </Heading>
                      <Text
                        fontSize='30px'
                      >
                        Diariamente das 8h às 10h
                      </Text>
                      <Text
                      
                      >
                          O programa é uma extensão do gabinete do Vereador Luiz Alfredo. Ali, ele recebe demandas, 
                          convidados e diversas informações de nossa cidade. O bate papo também passa pelos bastidores 
                          do poder, sempre de forma direta e sem amarras.
                      </Text>
                    </Flex>
                    <Image
                      w="55%"
                      h="100%"
                      objectFit="contain"
                      src="/images/CidaEmFoco.jpg"
                      alt="MaMa Live" 
                    />
                  </Flex>
                  
                </Slide>
              </Slider>
            </CarouselProvider>
        </div>
      </div>
       
    );
}