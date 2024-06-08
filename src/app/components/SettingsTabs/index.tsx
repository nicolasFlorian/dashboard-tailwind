'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [selectedTab, setSelectedTab] = useState('tab1')

  return (
    <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="My details"
              isSelected={selectedTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={selectedTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={selectedTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={selectedTab === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={selectedTab === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={selectedTab === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={selectedTab === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelected={selectedTab === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelected={selectedTab === 'tab9'}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={selectedTab === 'tab10'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-0.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
