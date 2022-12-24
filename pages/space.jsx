import { Avatar, Box, ButtonCard, Text, Heading, MediaPicker, IconNFT, Stack  } from 'degen'
import Image from 'next/image'

export default function Space() {

  return (
    <Box backgroundColor='background' height={'viewHeight'}>
       <Box marginRight={'32'} marginLeft={'32'}>
        <Box paddingY={'4'}>
          <Box display={'flex'} alignItems={'center'}  gap={'1.5'}>
              <Avatar as={Image} address="0x78Bddfs96cC5c0d6B506597609B64F1D999D82Dc" placeholder/>
              <Text>Blanco Bounty</Text>
          </Box>
        </Box>
        <Box paddingY={'4'}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginBottom={'4'}>
            <Heading>Your files</Heading>  
            <MediaPicker compact label="Choose or drag and drop files to upload" onChange={(file) => {console.log(file)}} />
          </Box>
            <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} gap={'10'}>
                <ButtonCard width={'48'}  buttonText="Download file">
                  <Stack align={'center'}>
                    <IconNFT color={'white'}/>
                    <Text>Name</Text>
                  </Stack>
                </ButtonCard>
                <ButtonCard width={'48'}  buttonText="Download file" onClick={() => {console.log('Download file')}}>
                  <Stack align={'center'}>
                    <IconNFT color={'white'}/>
                    <Text>Name</Text>
                  </Stack>
                </ButtonCard>
            </Box>
        </Box>
      </Box>
    </Box>
     
  )
}
