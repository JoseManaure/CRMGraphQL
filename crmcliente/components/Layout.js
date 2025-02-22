import React from 'react';
import Head from  'next/head';
import Sidebar from './Sidebar'
import Header from './Header'
import { useRouter} from 'next/router'

const Layout = ({children}) => {
    // Hook derouting
    const router = useRouter();

    return (
        <>
            <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css" />
              <script src="https://cdn.tailwindcss.com"></script>
                <title>CRM -Aplicacion Ramon Silva</title>
            </Head> 
                
                {router.pathname === '/login' || router.pathname === '/nuevacuenta' ? (
                    <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
                       
                       <div>
                         {children}
                       </div> 
                    </div>
                ) : (
                    <div className="bg-gray-200 min-h-screen">
                         <div className="flex min-h-screen">
                         <Sidebar /> 
                            <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                                <Header />                              
                                 {children} 
                            </main>
                       
                        </div>
                    </div>
                )}
                    
            
          
        </>
    );
}

export default Layout;