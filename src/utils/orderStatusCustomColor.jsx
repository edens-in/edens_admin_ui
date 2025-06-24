export const orderStatusCustomBgColor = (status) => { 
    // ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
    switch(status){ 
        case 'pending': return '#fff3cd'; 
        case 'processing': return '#d1ecf1'; 
        case 'shipped': return '#cce5ff'; 
        case 'delivered': return '#d4edda'; 
        case 'cancelled': return '#f8d7da'; 
        default: return '#e2e3e5'; 
    }
}

export const orderStatusCustomTextColor = (status) => { 
    switch(status){ 
        case 'pending': return '#856404'; 
        case 'processing': return '#0c5460'; 
        case 'shipped': return '#004085'; 
        case 'delivered': return '#155724'; 
        case 'cancelled': return '#721c24'; 
        default: return '#e2e3e5'; 
    }
}