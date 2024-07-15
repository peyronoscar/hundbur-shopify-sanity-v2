import { XMarkMini } from "@medusajs/icons"
import { FormEvent } from "react"
import { useRouter } from "next/navigation"

import SearchBoxWrapper, {
  ControlledSearchBoxProps,
} from "../search-box-wrapper"

const ControlledSearchBox = ({
  inputRef,
  onChange,
  onReset,
  onSubmit,
  placeholder,
  value,
  ...props
}: ControlledSearchBoxProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (onSubmit) {
      onSubmit(event)
    }

    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const handleReset = (event: FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    onReset(event)

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div {...props} className="w-full">
      <form action="" noValidate onSubmit={handleSubmit} onReset={handleReset}>
        <div className="flex items-center justify-between">
          <input
            ref={inputRef}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            placeholder={placeholder}
            spellCheck={false}
            type="search"
            value={value}
            onChange={onChange}
            className="flex-1 h-6 bg-transparent txt-compact-large placeholder:text-ui-fg-on-color placeholder:transition-colors focus:outline-none "
          />
          {value && (
            <button
              onClick={handleReset}
              type="button"
              className="flex items-center justify-center px-2 text-ui-fg-on-color focus:outline-none gap-x-2 txt-compact-large"
            >
              <XMarkMini />
              Stäng
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

const SearchBox = () => {
  const router = useRouter()

  return (
    <SearchBoxWrapper>
      {(props) => {
        return (
          <>
            <ControlledSearchBox {...props} />
          </>
        )
      }}
    </SearchBoxWrapper>
  )
}

export default SearchBox
