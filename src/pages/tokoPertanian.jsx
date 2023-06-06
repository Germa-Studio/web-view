import React from 'react'
import MainCard from "../components/MainCard"
import SearchBar from "../components/pages/TokoPertanian/searchBar"
import HeadBar from "../components/pages/TokoPertanian/headBar"
import { Radio, Group } from '@mantine/core';
export default function TokoPertanian() {
  return (
    <MainCard transparent noPadding>
      <MainCard transparent noPadding row center width="100%">
      <MainCard transparent noPadding row center gap={100} width="50%">
        <SearchBar/>
        <MainCard transparent noPadding width="50%">
        <Radio.Group
        size="xs"
        >
          <Group mt="xs">
            <Radio value="populer" label="Populer" />
            <Radio value="baru" label="Baru" />
          </Group>
        </Radio.Group>
        </MainCard>
        </MainCard>
      </MainCard>
      <MainCard transparent noPadding row center>
        <HeadBar/>
      </MainCard>
      <MainCard transparent noPadding>

      </MainCard>
    </MainCard>
  )
}
