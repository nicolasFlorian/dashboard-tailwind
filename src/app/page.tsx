import { SettingsTabs } from './components/SettingsTabs'
import * as Input from './components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from './components/Form/FileInput'
import { Select } from './components/Form/Select/index'
import { SelectItem } from './components/Form/Select/SelectItem'
import { TextArea } from './components/Form/Textarea'
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal Info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Nicolas" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-100"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Floriano" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-4 w-4 text-zinc-500 dark:text-zinc-300" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="nicolasfloriano@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile.
              </span>
            </label>
            <div>
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Email
            </label>
            <Input.Root>
              <Input.Control
                id="role"
                type="text"
                defaultValue="nicolasfloriano@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="us" text="United States" />
              <SelectItem value="cn" text="Canada" />
              <SelectItem value="mx" text="Mexico" />
              <SelectItem value="br" text="Brazil" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="pc" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="am" text="America São Paulo (UTC-03:00)" />
            </Select>
            <div />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="title1" text="Title 1" />
                  <SelectItem value="title2" text="Title 2" />
                  <SelectItem value="title3" text="Title 3" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="icon">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="icon" type="button">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="icon" type="button">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="icon" type="button">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="icon" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <TextArea defaultValue="I'm a UX/UI Designer living in LA" />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:items-center">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
