export const cache = {
    set: (key, value, ttl = 0) => {
      const now = Date.now();
      const item = {
        value: value,
        expiry: ttl > 0 ? now + ttl : null
      };
      localStorage.setItem(key, JSON.stringify(item));
    },
  
    get: (key) => {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;
  
      try {
        const item = JSON.parse(itemStr);
        const now = Date.now();
        if (item.expiry && now > item.expiry) {
          localStorage.removeItem(key);
          return null;
        }
  
        return item.value;
      } catch (error) {
        console.error("Błąd podczas odczytu cache", error);
        return null;
      }
    },
  
    remove: (key) => {
      localStorage.removeItem(key);
    },
  
    clear: () => {
      localStorage.clear();
    },
    getAll: () => {
        const allItems = {};
        const now = Date.now();
    
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const itemStr = localStorage.getItem(key);
    
          try {
            const item = JSON.parse(itemStr);
            if (!item.expiry || now <= item.expiry) {
              allItems[key] = item.value;
            } else {
              localStorage.removeItem(key); 
            }
          } catch (error) {
            console.error(`Błąd podczas odczytu elementu z cache: ${key}`, error);
          }
        }
    
        return allItems;
      },
  };
  