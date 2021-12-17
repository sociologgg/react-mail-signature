/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  SelectorIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/solid";
const socialIcons = {
  instagram: require("../../images/instagram-fill.png").default,
  twitter: require("../../images/twitter-fill.png").default,
  linkedin: require("../../images/linkedin-fill.png").default,
  facebook: require("../../images/facebook-fill.png").default,
  youtube: require("../../images/youtube-fill.png").default,
  web: require("../../images/website-fill.png").default,
  behance: require("../../images/behance-fill.png").default,
  github: require("../../images/github-fill.png").default,
};

const socialVerifiers = {
  instagram: (value) => {
    try {
      return new URL(value).hostname.endsWith("instagram.com");
    } catch (e) {
      return false;
    }
  },
  twitter: (value) => {
    try {
      return new URL(value).hostname.endsWith("twitter.com");
    } catch (e) {
      return false;
    }
  },
  youtube: (value) => {
    try {
      return new URL(value).hostname.endsWith("youtube.com");
    } catch (e) {
      return false;
    }
  },
  linkedin: (value) => {
    try {
      return new URL(value).hostname.endsWith("linkedin.com");
    } catch (e) {
      return false;
    }
  },
  facebook: (value) => {
    try {
      return new URL(value).hostname.endsWith("facebook.com");
    } catch (e) {
      return false;
    }
  },
  web: (value) => {
    try {
      return new URL(value).hostname != undefined;
    } catch (e) {
      return false;
    }
  },
  youtube: (value) => {
    try {
      return new URL(value).hostname.endsWith("youtube.com");
    } catch (e) {
      return false;
    }
  },
  behance: (value) => {
    try {
      return new URL(value).hostname.endsWith("behance.com");
    } catch (e) {
      return false;
    }
  },
  github: (value) => {
    try {
      return new URL(value).hostname.endsWith("github.com");
    } catch (e) {
      return false;
    }
  },
};
const socials = Object.entries(socialIcons).map(([key, value]) => {
  return { key: key, icon: value };
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectMenu({
  selectedSocial,
  onSocialChange,
  onInputChange,
}) {
  const selected = socials.find((s) => s.key === selectedSocial);
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Listbox
          value={selected}
          onChange={(value) => onSocialChange(value.key)}
        >
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-l-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none   focus:border-janus-focus-blue sm:text-sm">
              <span className="flex items-center">
                <img
                  src={`${selected.icon}`}
                  alt=""
                  className="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {socials.map((social) => (
                  <Listbox.Option
                    key={social.key}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={social}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={`${social.icon}`}
                            alt=""
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
          <div>
            {/*
          <TrashIcon
            className="absolute h-5 w-5 text-gray-300 ml-40 mt-3"
            onClick={() => {
              console.log("clicked");
              console.log(selected.key);
              const filtered = socials.filter((social, index, arr) => {
                return social.key != selected.key;
              });
            }}
          />*/}

            <input
              onBlur={() => {
                setTouched(true);
              }}
              onChange={(e) => (
                onInputChange(e.target.value),
                setSelectedInputValue(e.target.value)
              )}
              className="h-10 mt-1 pl-10px shadow-input rounded-r text-blue-800 focus:outline-none focus:ring-2 focus:janus-dark-blue "
              placeholder={
                selected.key == "web"
                  ? "https://yourwebsite.com"
                  : `https://www.${selected.key}.com`
              }
            />
          </div>
        </Listbox>
      </div>
      {!socialVerifiers[selected.key]?.(selectedInputValue) &&
      touched &&
      selectedInputValue.length > 0 ? (
        <p className="mt-2 font-roboto text-janus-red font-light">
          Lütfen geçerli bir {selected.key} adresi giriniz!
        </p>
      ) : null}
    </div>
  );
}
