import { NavigationMenu } from 'radix-ui';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const navItems = [
  { name: 'On Sale', href: '/sale' },
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'Brands', href: '/brands' },
];

const shopSubNavItems = [
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/women' },
  { name: 'Kids', href: '/kids' },
];

const NavBar = () => {
  return (
    <NavigationMenu.Root className='hidden lg:block'>
      <NavigationMenu.List className="flex gap-6 text-black">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center gap-1 cursor-pointer">
            <RiArrowDropDownLine className="size-4" aria-hidden />
            Shop
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute bg-white shadow-md rounded-md p-4 min-w-[160px]">
            <ul className="flex flex-col gap-2">
              {shopSubNavItems.map((item, index) => {
                return (
                  <li key={`shop-subnav-${index}`} className="text-black">
                    <NavigationMenu.Link href={item.href}>
                      {item.name}
                    </NavigationMenu.Link>
                  </li>
                );
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {navItems.map((item, index) => {
          return (
            <NavigationMenu.Item key={`nav-item-${index}`}>
              <NavigationMenu.Link href={item.href} className="text-black">
                {item.name}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};

export default NavBar;
