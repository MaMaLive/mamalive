import React from 'react';
import {Flex, Image, Text, Heading, Box, useBreakpointValue} from '@chakra-ui/react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export function Carousel(){

  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
})
    return (
      <Box
        id='programation'
        style={{backgroundColor:'#e6e6e6'}}
      >

        <Box
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
              <Slider style={{ maxHeight:'31rem', cursor: 'grab'}}>
                <Slide index={0}>
                  <Flex
                    my={['3.5rem', '4.5rem']}
                    p='0 1rem'
                    flexDirection={isWiderVersion ? 'row' : 'column'}
                    >
                    <Flex
                      flexDirection='column'
                      w={isWiderVersion && '45%'}
                      justify='space-between'
                      mr='0.5rem'
                      align={isWiderVersion ? 'left' : 'center'}
                    >

                      <Heading
                        fontSize={['32px', '32px', '52px']}
                        lineHeight='100%'
                        align={isWiderVersion || 'center'}

                        // mb='0.5rem'


                      >
                        AVENTURAS &amp;AVENTUREIROS
                      </Heading>
                      <Heading
                        fontSize={['24px', '24px', '36px']}
                        // mb='0.5rem'

                      >
                        VANDER DISSENHA
                      </Heading>
                      <Text
                        fontSize={['20px', '20px', '30px']}
                        // mb='0.5rem'
                        mb={isWiderVersion ? '0' : '1rem'}

                      >
                        Ter??a das 20h ??s 21h
                      </Text>

                       { isWiderVersion && (

                        <Text

                        >
                            Viagens, aventuras, trilhas, esportes na natureza. Sempre com participa????es de pessoas que 
                            tiveram momentos incr??veis, hist??rias, perrengues e aventuras emocionantes. O programa Aventuras
                            &amp; Aventureiros ?? o local certo para saber sobre aquela viagem ou aquela aventura para se 
                            divertir e fugir da rotina do dia a dia.
                        </Text>
                       )}
                      
                    </Flex>
                    <Image
                      w={isWiderVersion && "55%"}
                      h="100%"
                      objectFit="contain"
                      src="/images/Avent.jpg"
                      alt="Aventuras &amp; Aventureiros" 
                    />
                  </Flex>
                </Slide>
                <Slide index={1}>
                <Flex
                  mt={['2.5rem', '4.5rem']}
                  p='0 1rem'
                  flexDirection={isWiderVersion ? 'row' : 'column'}
                >
                    <Flex
                      flexDirection='column'
                      w={isWiderVersion && '45%'}
                      justify='space-between'
                      mr='1rem'
                      align={isWiderVersion ? 'left' : 'center'}
                    >

                      <Heading
                        fontSize={['32px', '32px', '52px']}
                        align={isWiderVersion || 'center'}
                      >
                        PODSERLEGAL
                      </Heading>
                      <Heading
                      fontSize={['24px', '24px', '36px']}

                      >
                        PROF. RAFAEL CALLEGARI E CARLOS AUGUSTO
                      </Heading>
                      <Text
                        fontSize={['20px', '20px', '30px']}
                        mb={isWiderVersion ? '0' : '1rem'}
                      >
                        Quarta das 12h ??s 15h
                      </Text>

                      { isWiderVersion && (

                        <Text
                        
                        >
                            Direito n??o precisa ser chato, ele pode ser divertido. De uma forma diferente, linguagem mais 
                            din??mica e did??tica os temas do direito s??o debatidos, historicizados e colocados em uma 
                            pespectiva interdisciplinar.
                        </Text>
                      )}
                    </Flex>
                    <Image
                      w={isWiderVersion && "55%"}
                      h="100%"
                      objectFit="contain"
                      src="/images/PodserLegal.jpg"
                      alt="PodSerLegal" 
                    />
                  </Flex>
                </Slide>
                <Slide index={2}>
                <Flex
                  mt={['3.5rem', '4.5rem']}
                  p='0 1rem'
                  flexDirection={isWiderVersion ? 'row' : 'column'}
                >
                    <Flex
                      flexDirection='column'
                      w={isWiderVersion && '45%'}
                      justify='space-between'
                      align={isWiderVersion ? 'left' : 'center'}
                    >

                      <Heading
                        fontSize={['32px', '32px', '52px']}
                        lineHeight='100%'
                        align={isWiderVersion || 'center'}

                      >
                        EDUCA????O E ARTE
                      </Heading>
                      <Heading
                      fontSize={['24px', '24px', '36px']}

                      >
                        C??CERO PEREIRA DE SOUZA
                      </Heading>
                      <Text
                        fontSize={['20px', '20px', '30px']}
                        mb={isWiderVersion ? '0' : '1rem'}
                      >
                        Quinta das 18:30h ??s 19:30h
                      </Text>

                      { isWiderVersion && (

                        <Text
                        
                        >
                            Arte, conhecimentos, ci??ncias, tecnologias, culturas e hist??rias. Estejam conosco.
                        </Text>
                      )}
                    </Flex>
                    <Image
                      w={isWiderVersion && "55%"}
                      h="100%"
                      objectFit="contain"
                      src="/images/EducArt.jpg"
                      alt="Educa????o e Arte" 
                    />
                  </Flex>

                </Slide>
                <Slide index={3}>
                <Flex
                  mt={['3.5rem', '4.5rem']}
                  p='0 2rem'
                  flexDirection={isWiderVersion ? 'row' : 'column'}
                >
                    <Flex
                      flexDirection='column'
                      w={isWiderVersion && '45%'}
                      justify='space-between'
                      mr='2rem'
                      align={isWiderVersion ? 'left' : 'center'}
                    >

                      <Heading
                        fontSize={['32px', '32px', '52px']}
                        align={isWiderVersion || 'center'}

                      >
                        HORA7NEWS
                      </Heading>
                      <Heading
                      fontSize={['24px', '24px', '36px']}

                      >
                        PROF. RAFAEL CALLEGARI E DIONE CLEI VAL??RIO
                      </Heading>
                      <Text
                        fontSize={['20px', '20px', '30px']}
                        mb={isWiderVersion ? '0' : '1rem'}
                      >
                        Diariamente das 7h ??s 7:50h
                      </Text>

                      { isWiderVersion && (

                        <Text
                        
                        >
                            Come??ar seu dia bem informado com um Resumo das principais not??cias de Campo Mour??o, Paran??, 
                            Brasil e do mundo. Sempre com curiosidades e coment??rios pontuais para te dar uma outra vis??o 
                            dos fatos.
                        </Text>
                      )}
                    </Flex>
                    <Image
                      w={isWiderVersion && "55%"}
                      h="100%"
                      objectFit="contain"
                      src="/images/H7N.jpg"
                      alt="Hora 7 News" 
                    />
                  </Flex>
                  
                </Slide>
                <Slide index={4}>
                <Flex
                  mt={['3.5rem', '4.5rem']}
                  p='0 1rem'
                  flexDirection={isWiderVersion ? 'row' : 'column'}
                >
                    <Flex
                      flexDirection='column'
                      w={isWiderVersion && '45%'}
                      justify='space-between'
                      mr='2rem'
                      align={isWiderVersion ? 'left' : 'center'}
                    >

                      <Heading
                        fontSize={['32px', '32px', '52px']}
                        lineHeight='100%'
                        mb='0.5rem'
                        align={isWiderVersion || 'center'}

                      >
                        CIDADE EM FOCO
                      </Heading>
                      <Heading
                        fontSize={['24px', '24px', '36px']}

                      >
                        ANDR?? LUIZ ALVES E ROBERTA SERATO
                      </Heading>
                      <Text
                        fontSize={['20px', '20px', '30px']}
                        mb={isWiderVersion ? '0' : '1rem'}
                      >
                        Diariamente das 8h ??s 10h
                      </Text>

                      { isWiderVersion && (

                        <Text
                        
                        >
                            O programa ?? uma extens??o do gabinete do Vereador Luiz Alfredo. Ali, ele recebe demandas, 
                            convidados e diversas informa????es de nossa cidade. O bate papo tamb??m passa pelos bastidores 
                            do poder, sempre de forma direta e sem amarras.
                        </Text>
                      )}
                    </Flex>
                    <Image
                      w={isWiderVersion && "55%"}
                      h="100%"
                      objectFit="contain"
                      src="/images/CidaEmFoco.jpg"
                      alt="Cidade em Foco" 
                    />
                  </Flex>
                  
                </Slide>
              </Slider>
            </CarouselProvider>
        </Box>
      </Box>
       
    );
}