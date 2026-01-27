from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class UserRole(Base):
    __tablename__ = 'user_roles'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    
    # Relationships
    users = relationship("User", back_populates="role")


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    phone_number = Column(Integer)
    password = Column(String)
    role_id = Column(Integer, ForeignKey('user_roles.id'))
    
    # Relationships
    role = relationship("UserRole", back_populates="users")
    deliveries = relationship("Delivery", back_populates="user")


class Rider(Base):
    __tablename__ = 'rider'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    phone_number = Column(Integer)
    
    # Relationships
    deliveries = relationship("Delivery", back_populates="rider")


class PriceIndex(Base):
    __tablename__ = 'price_index'
    id = Column(Integer, primary_key=True)
    price_per_km = Column(Integer)
    price_per_kg = Column(Integer)
    price_per_cm = Column(Integer)
    
    # Relationships
    deliveries = relationship("Delivery", back_populates="price_index")


class Delivery(Base):
    __tablename__ = 'delivery'
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    price_index_id = Column(Integer, ForeignKey('price_index.id'))
    distance = Column(Float)
    weight = Column(Float)
    size = Column(Float)
    pickup_location = Column(String)
    drop_off_location = Column(String)
    status = Column(String)
    canceled_by = Column(String)
    rider_id = Column(Integer, ForeignKey('rider.id'))
    
    # Relationships
    user = relationship("User", back_populates="deliveries")
    rider = relationship("Rider", back_populates="deliveries")
    price_index = relationship("PriceIndex", back_populates="deliveries")